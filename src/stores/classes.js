import { defineStore } from 'pinia';
import axios from 'axios';

export const useClassesStore = defineStore('classes', {
  state: () => ({
    id: '',
    classes: [],
    exportType: 'pdf',
    dateStart: null,
    dateEnd: null,
    sort: 'asc',
    currentPage: 1,
    perPage: 10,
    total: 0,
    lastPage: 1,
    search: '',
    status: null,
    section_id: null,
  }),

  actions: {
    /* ---------------------------------------------------------------------
     * FETCH ALL CLASSES
     * ------------------------------------------------------------------- */
    async index() {
      try {
        const params = {
          date_start: this.dateStart,
          date_end: this.dateEnd,
          sort: this.sort,
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null,
          status: this.status,
          section_id: this.section_id
        }
        console.log('Fetching classes with params:', params);
        const response = await axios.get('/classes', { params })

        if (response?.status === 200) {
          this.classes = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.perPage = response.data.meta?.per_page || 10;
          this.total = response.data.meta?.total || 0;
          this.lastPage = response.data.meta?.last_page || 1;

          return true;
        }
      } catch (error) {
        console.error('Error fetching classes:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * CREATE CLASS
     * ------------------------------------------------------------------- */
    async store(payload) {
      try {
        const response = await axios.post('/classes', payload);
        if (response?.status === 201) {
          await this.index();
          return true;
        }
      } catch (error) {
        console.error('Error creating class:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * UPDATE CLASS
     * ------------------------------------------------------------------- */
    async update(classId, payload) {
      console.log(payload)

      try {
        const response = await axios.put(`/classes/${classId}`, payload);
        if (response?.status === 200) {
          await this.index();
          return true;
        }
      } catch (error) {
        console.error('Error updating class:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * DELETE CLASS
     * ------------------------------------------------------------------- */
    async destroy(classId) {
      try {
        const response = await axios.delete(`/classes/${classId || this.id}`);
        if (response?.status === 200) {
          this.classes = this.classes.filter((item) => item.id !== (classId || this.id));
          return true;
        }
      } catch (error) {
        console.error('Error deleting class:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * EXPORT AS PDF OR EXCEL AND PRINT
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/classes/export?type=${this.exportType}`;
        if(this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting classes:', error.response?.data || error);
        return false;
      }
    }
  },
});
