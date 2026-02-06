import { defineStore } from 'pinia';
import axios from 'axios';
import { useNotificationStore } from './notification';
import { useAuthStore } from './auth';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    user: null,
    loading: false,
    errorMessage: null,
  }),

  actions: {
    async fetchProfile() {
      this.loading = true;
      try {
        const response = await axios.get('/profile');
        this.user = response.data.data;
        this.loading = false;
      } catch (error) {
        this.errorMessage = error.message;
        this.loading = false;
      }
    },

    async updateProfile(data) {
      const notificationStore = useNotificationStore();
      const authStore = useAuthStore();
      this.loading = true;
      try {
        const response = await axios.put('/profile', data);
        this.user = response.data.data;
        // Update user in auth store too
        authStore.user = this.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        
        notificationStore.setNotification({ message: 'Profile updated successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to update profile', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async uploadAvatar(file) {
      const notificationStore = useNotificationStore();
      const authStore = useAuthStore();
      this.loading = true;
      try {
        const formData = new FormData();
        formData.append('avatar', file);
        
        const response = await axios.post('/profile/avatar', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        
        const photoUrl = response.data.data.url;
        if (this.user && this.user.attributes) {
          this.user.attributes.profile_photo_url = photoUrl;
          authStore.user = this.user;
          localStorage.setItem('user', JSON.stringify(this.user));
        }
        
        notificationStore.setNotification({ message: 'Profile picture updated', status: 'success' });
        this.loading = false;
        return photoUrl;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Upload failed', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async deleteAvatar() {
      const notificationStore = useNotificationStore();
      const authStore = useAuthStore();
      this.loading = true;
      try {
        await axios.delete('/profile/avatar');
        if (this.user && this.user.attributes) {
          this.user.attributes.profile_photo_url = null;
          authStore.user = this.user;
          localStorage.setItem('user', JSON.stringify(this.user));
        }
        notificationStore.setNotification({ message: 'Profile picture removed', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Delete failed', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async changePassword(data) {
      const notificationStore = useNotificationStore();
      this.loading = true;
      try {
        await axios.post('/profile/change-password', data);
        notificationStore.setNotification({ message: 'Password changed successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to change password', status: 'error' });
        this.loading = false;
        return false;
      }
    }
  },
});
