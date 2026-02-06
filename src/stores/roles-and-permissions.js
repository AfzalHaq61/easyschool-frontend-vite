import { defineStore } from 'pinia';
import axios from 'axios';

// Redundant axios defaults removed as they are handled globally in auth.js

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
        const params = {
          date_start: this.dateStart,
          date_end: this.dateEnd,
          sort: this.sort,
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null
        }

        const response = await axios.get('/roles', { params })

        if (response?.status === 200) {
          const rawData = response.data.data || response.data || [];
          this.roles = Array.isArray(rawData) ? rawData : (rawData?.data || []);
          
          this.currentPage = response.data.meta?.current_page || 1;
          this.perPage = response.data.meta?.per_page || 10;
          this.total = response.data.meta?.total || 0;
          this.lastPage = response.data.meta?.last_page || 1;

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
        const response = await axios.post('/roles', { name });
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
        const response = await axios.put(`/roles/${roleId}`, { name });
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
        const response = await axios.delete(`/roles/${this.id}`);
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
        const baseUrl = axios.defaults.baseURL || 'https://easyschool.ddev.site/api';
        const queryParams = new URLSearchParams({
          type: this.exportType,
          search: this.search?.trim() || '',
          sort: this.sort || '',
          date_start: this.dateStart || '',
          date_end: this.dateEnd || ''
        });

        // Remove empty params
        for (const [key, value] of queryParams.entries()) {
          if (!value) queryParams.delete(key);
        }

        const url = `${baseUrl}/roles/export?${queryParams.toString()}`;

        if(this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
      } catch (error) {
        console.error('Error exporting roles:', error);
        return false;
      }
    }
  },
});
