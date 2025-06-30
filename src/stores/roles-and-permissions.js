import { defineStore } from 'pinia';
import axios from 'axios';

// Set the global base URL
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
axios.defaults.withCredentials = true; // If you're using cookies like Laravel Sanctum
axios.defaults.headers.common['Content-Type'] = 'application/json'; // Optionally, set headers globally

export const useRolesAndPermissionsStore = defineStore('roles-and-permissions', {
  state: () => ({
    id: '',
    roles: [],
    exportType: 'pdf',
    dateStart: null,
    dateEnd: null,
    sort: 'asc',
    currentPage: 1,
    perPage: 10,
    total: 0,
    lastPage: 1,
    search: '',
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    /* ---------------------------------------------------------------------
     * FETCH ALL ROLES
     * ------------------------------------------------------------------- */
    async index() {
      try {

        const authCheck = await axios.get('/api/user', { withCredentials: true });
        console.log('✅ Authenticated as:', authCheck.data);

        const params = {
          date_start: this.dateStart,
          date_end: this.dateEnd,
          sort: this.sort,
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null
        }

        const response = await axios.get('/api/roles', { params }, { withCredentials: true })

        if (response?.status === 200) {
          this.roles = response.data.data || [];
          this.currentPage = response.data.meta.current_page;
          this.perPage = response.data.meta.per_page;
          this.total = response.data.meta.total;
          this.lastPage = response.data.meta.last_page;

          return true;
        }
      } catch (error) {
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * CREATE ROLE
     * ------------------------------------------------------------------- */
    async store(name) {
      try {
        const response = await axios.post('/api/roles', { name });
        if (response?.status === 201) {
          await this.index();
          return true;
        }
      } catch (error) {
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * UPDATE ROLE
     * ------------------------------------------------------------------- */
    async update(roleId, name) {
      try {
        const response = await axios.put(`/api/roles/${roleId}`, { name });
        if (response?.status === 200) {
          await this.index();
          return true;
        }
      } catch (error) {
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * DELETE ROLE
     * ------------------------------------------------------------------- */
    async destroy() {
      try {
        const response = await axios.delete(`/api/roles/${this.id}`);
        if (response?.status === 200) {
          this.roles = this.roles.filter((role) => role.id !== this.id);
          return true;
        }
      } catch (error) {
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * EXPORT AS PDF OR EXCEL AND PRINT
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `https://easyschool.ddev.site/api/roles/export?type=${this.exportType}`;
        if(this.exportType == 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
      } catch (error) {
        return false;
      }
    }
  },
});
