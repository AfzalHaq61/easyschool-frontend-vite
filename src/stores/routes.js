import { defineStore } from 'pinia'
import axios from 'axios'

export const useRoutesStore = defineStore('routes', {
  state: () => ({
    routes: [],
    id: null,
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    status: null,
    sort: 'asc',
    sortBy: 'created_at',
    dateStart: '',
    dateEnd: '',
    exportType: 'pdf',
  }),

  actions: {
    /* -------------------------------------------------------------------
     * FETCH ROUTES
     * ------------------------------------------------------------------- */
    async index() {
      try {
        const params = {
          date_start: this.dateStart,
          date_end: this.dateEnd,
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null,
          order: this.sort,
          sort_by: this.sortBy,
          status: this.status
        }
        const response = await axios.get('/routes', { params })

        if (response?.status === 200) {
          this.routes = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;
        }
      } catch (error) {
        console.error('Error fetching routes:', error.response?.data || error);
        this.routes = [];
        this.currentPage = 1;
        this.total = 0;
      }
    },

    /* -------------------------------------------------------------------
     * CREATE ROUTE
     * ------------------------------------------------------------------- */
    async store(payload) {
      try {
        const response = await axios.post('/routes', payload);
        if (response?.status === 201) return true;
      } catch (error) {
        console.error('Error creating route:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * UPDATE ROUTE
     * ------------------------------------------------------------------- */
    async update(id, payload) {
      try {
        const response = await axios.post(`/routes/${id}`, {
          ...payload,
          _method: 'PUT'
        });
        if (response?.status === 200) return true;
      } catch (error) {
        console.error('Error updating route:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * DELETE ROUTE
     * ------------------------------------------------------------------- */
    async destroy() {
      if (!this.id) return false;
      try {
        const response = await axios.delete(`/routes/${this.id}`);
        if (response?.status === 204 || response?.status === 200) {
          this.id = null;
          return true;
        }
      } catch (error) {
        console.error('Error deleting route:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * EXPORT ROUTES
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/routes/export?type=${this.exportType}`;
        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting routes:', error);
      }
      return false;
    }
  }
})
