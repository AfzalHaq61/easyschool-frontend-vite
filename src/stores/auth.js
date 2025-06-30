import { defineStore } from 'pinia';
import axios from 'axios';

// Set the global base URL
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
axios.defaults.withCredentials = true; // If you're using cookies like Laravel Sanctum
axios.defaults.headers.common['Content-Type'] = 'application/json'; // Optionally, set headers globally

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    notification: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(email, password) {
      try {
        // Get CSRF cookie
        await axios.get('/sanctum/csrf-cookie', { withCredentials: true });

        // Send login request
        const response = await axios.post('/api/login', {
          email,
          password,
        }, { withCredentials: true });

        if (response?.status === 200) {
          this.user = response.data?.data?.user;
          return true;
        }

      } catch (error) {
        return false;
      }
    },

    async forgotPassword(email) {
      try {
        // Get CSRF cookie for Laravel Sanctum
        await axios.get('/sanctum/csrf-cookie');
    
        // Send forgot password request
        const response = await axios.post('/api/forgot-password', { email });
    
        if (response?.status === 200) {
          this.notification = {
            status: 'success',
            message: response.data.message || 'Password reset link sent successfully.',
          };
        }
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
    
    async resetPassword(payload) {
      try {
        // Get CSRF cookie for Laravel Sanctum
        await axios.get('/sanctum/csrf-cookie');
    
        // Send forgot password request
        await axios.post('/api/reset-password', payload );

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

    async emailVerification() {
      try {

        const token = localStorage.getItem('authToken');

        // Send logout request with the token in the Authorization header
        await axios.post(
          '/api/email-verification',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token with the request
            },
          }
        );
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

        const token = localStorage.getItem('authToken');

        // Send logout request with the token in the Authorization header
        await axios.post(
          '/api/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token with the request
            },
          }
        );

        this.user = null;
        this.token = null;
        localStorage.removeItem('authToken');
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
