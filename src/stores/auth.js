import { defineStore } from 'pinia';
import axios from 'axios';

// Set the global base URL
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
axios.defaults.withCredentials = true; // If you're using cookies like Laravel Sanctum
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add a request interceptor to inject the token
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

const csrfBaseUrl = new URL(axios.defaults.baseURL).origin;

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('authToken') || null,
    notification: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(email, password) {
      try {
        // Get CSRF cookie
        await axios.get('/sanctum/csrf-cookie', { baseURL: csrfBaseUrl, withCredentials: true });

        // Send login request
        const response = await axios.post('/login', {
          email,
          password,
        }, { withCredentials: true });

        if (response?.status === 200) {
          const userData = response.data?.data?.user;
          const token = response.data?.data?.token; // Assuming token is returned here
          
          this.user = userData;
          this.token = token;

          if (token) {
            localStorage.setItem('authToken', token);
          }
          if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
          }

          return { success: true };
        }

      } catch (error) {
        let errorMessage = 'An error occurred. Please try again.';

        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        
        return { success: false, message: errorMessage };
      }
    },

    async forgotPassword(email) {
      try {
        // Get CSRF cookie for Laravel Sanctum
        await axios.get('/sanctum/csrf-cookie', { baseURL: csrfBaseUrl });
    
        // Send forgot password request
        const response = await axios.post('/forgot-password', { email });
    
        if (response?.status === 200) {
          const message = response.data.message || 'Password reset link sent successfully.';
          this.notification = { status: 'success', message };
          return { success: true, message };
        }
      } catch (error) {
        let errorMessage = 'An error occurred. Please try again.';

        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }

        this.notification = { status: 'error', message: errorMessage };
        return { success: false, message: errorMessage };
      }
    },
    
    async resetPassword(payload) {
      try {
        // Get CSRF cookie for Laravel Sanctum
        await axios.get('/sanctum/csrf-cookie', { baseURL: csrfBaseUrl });
    
        // Send reset password request
        const response = await axios.post('/reset-password', payload );

        if (response?.status === 200) {
          const message = response.data.message || 'Password reset successful.';
          this.notification = { status: 'success', message };
          return { success: true, message };
        }

      } catch (error) {
        let errorMessage = 'An error occurred. Please try again.';

        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }

        this.notification = { status: 'error', message: errorMessage };
        return { success: false, message: errorMessage };
      }
    },

    async emailVerification() {
      try {

        await axios.post('/email-verification');
      } catch (error) {
        let errorMessage = 'An error occurred. Please try again.';

        if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }

        this.notification = {
          status: 'error',
          message: errorMessage,
        };
      }
    },

    async logout() {
      try {

        await axios.post('/logout');

        this.user = null;
        this.token = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        localStorage.removeItem('emailVerification');
      } catch (error) {
        let errorMessage = 'An error occurred. Please try again.';

        if (error.response.data.message) {
          errorMessage = error.response.data.message;
        }

        this.notification = {
          status: 'error',
          message: errorMessage,
        };
      }
    },
  },
});
