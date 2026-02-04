import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    role: null,
    status: null,
    sort: 'asc',
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
          search: this.search?.trim() || null,
          role: this.role,
          status: this.status,
          sort: this.sort
        }
        const response = await axios.get('/users', { params })

        if (response?.status === 200) {
          this.users = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;
        }
      } catch (error) {
        console.error('Error fetching users:', error.response?.data || error);
        this.users = [];
        this.currentPage = 1;
        this.total = 0;
      }
    },

    /* -------------------------------------------------------------------
     * EXPORT USERS
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/users/export?type=${this.exportType}`;
        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting users:', error);
      }
      return false;
    }
  }
})
