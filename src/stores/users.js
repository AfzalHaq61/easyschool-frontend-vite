import { defineStore } from 'pinia'
import axios from 'axios'
import { useNotificationStore } from './notification'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    id: '',
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    role: null,
    roleId: null,
    status: null,
    sort: 'asc',
    sortBy: 'created_at',
    dateStart: null,
    dateEnd: null,
    exportType: 'pdf',
  }),

  actions: {
    /* -------------------------------------------------------------------
     * FETCH USERS
     * ------------------------------------------------------------------- */
    async index() {
      try {
        const params = {
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || undefined,
          roles_id: this.roleId || undefined,
          role_id: this.roleId || undefined, // Support both singular and plural
          status: this.status || undefined,
          sort: this.sort || undefined,
          sort_by: this.sortBy || undefined,
          date_start: this.dateStart || undefined,
          date_end: this.dateEnd || undefined
        }
        const response = await axios.get('/users', { params })

        if (response?.status === 200) {
          const rawData = response.data.data || response.data || [];
          this.users = Array.isArray(rawData) ? rawData : (rawData?.data || []);
          
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;

          // If current page is empty and we have data on previous pages, go back
          if (this.users.length === 0 && this.currentPage > 1) {
            this.currentPage--;
            await this.index();
          }
        }
      } catch (error) {
        console.error('Error fetching users:', error.response?.data || error);
        this.users = [];
        this.currentPage = 1;
        this.total = 0;
      }
    },

    /* -------------------------------------------------------------------
     * DELETE USER
     * ------------------------------------------------------------------- */
    async destroy() {
      const notificationStore = useNotificationStore();
      try {
        const response = await axios.delete(`/users/${this.id}`);
        if (response?.status === 200) {
          notificationStore.setNotification({ message: 'User deleted successfully', status: 'success' });
          await this.index();
          return true;
        }
      } catch (error) {
        console.error('Error deleting user:', error.response?.data || error);
        notificationStore.setNotification({ message: error.response?.data?.message || 'Error deleting user', status: 'error' });
        return false;
      }
    },

    /* -------------------------------------------------------------------
     * EXPORT USERS
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const baseUrl = axios.defaults.baseURL || 'https://easyschool.ddev.site/api';
        const queryParams = new URLSearchParams({
          type: this.exportType,
          search: this.search?.trim() || '',
          roles_id: this.roleId || '',
          role_id: this.roleId || '',
          status: this.status || '',
          sort: this.sort || '',
          sort_by: this.sortBy || '',
          date_start: this.dateStart || '',
          date_end: this.dateEnd || ''
        });

        // Remove empty params
        for (const [key, value] of queryParams.entries()) {
          if (!value) queryParams.delete(key);
        }

        const url = `${baseUrl}/users/export?${queryParams.toString()}`;

        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
      } catch (error) {
        console.error('Error exporting users:', error);
        return false;
      }
    }
  }
})
