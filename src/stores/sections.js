import { defineStore } from 'pinia'
import axios from 'axios'

export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections: [],
    id: null, // ID of the section to delete
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    status: null,
    sort: 'asc',
    dateStart: '',
    dateEnd: '',
    exportType: 'pdf',
  }),

  actions: {
    /* -------------------------------------------------------------------
     * FETCH SECTIONS
     * ------------------------------------------------------------------- */
    async index() {
      try {
        const params = {
          date_start: this.dateStart,
          date_end: this.dateEnd,
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null,
          sort: this.sort,
          status: this.status
        }
        const response = await axios.get('/sections', { params })

        if (response?.status === 200) {
          this.sections = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;
        }
      } catch (error) {
        console.error('Error fetching sections:', error.response?.data || error);
        this.sections = [];
        this.currentPage = 1;
        this.total = 0;
      }
    },

    /* -------------------------------------------------------------------
     * CREATE SECTION
     * ------------------------------------------------------------------- */
    async store(payload) {
      console.log(payload);
      try {
        const response = await axios.post('/sections', payload);
        if (response?.status === 201) return true;
      } catch (error) {
        console.error('Error creating section:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * UPDATE SECTION
     * ------------------------------------------------------------------- */
    async update(id, payload) {
      try {
        const response = await axios.post(`/sections/${id}`, {
          ...payload,
          _method: 'PUT'
        });
        console.log(response);
        if (response?.status === 200) return true;
      } catch (error) {
        console.error('Error updating section:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * DELETE SECTION
     * ------------------------------------------------------------------- */
    async destroy() {
      if (!this.id) return false;
      try {
        const response = await axios.delete(`/sections/${this.id}`);
        if (response?.status === 204 || response?.status === 200) {
          this.id = null;
          return true;
        }
      } catch (error) {
        console.error('Error deleting section:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * EXPORT SECTIONS
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/sections/export?type=${this.exportType}`;
        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting sections:', error);
      }
      return false;
    }
  }
})
