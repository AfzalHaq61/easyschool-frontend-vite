import { defineStore } from 'pinia'
import axios from 'axios'

export const useSubjectsStore = defineStore('subjects', {
  state: () => ({
    subjects: [],
    id: null,
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    status: null,
    type: null,
    sort: 'asc',
    dateStart: '',
    dateEnd: '',
    exportType: 'pdf',
    types: [],
    codes: [],
  }),

  actions: {
    /* -------------------------------------------------------------------
     * FETCH SUBJECTS
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
          status: this.status,
          type: this.type
        }
        const response = await axios.get('/subjects', { params })

        if (response?.status === 200) {
          this.subjects = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;
        }
      } catch (error) {
        console.error('Error fetching subjects:', error.response?.data || error);
        this.subjects = [];
        this.currentPage = 1;
        this.total = 0;
      }
    },

    /* -------------------------------------------------------------------
     * FETCH SUBJECT CODES
     * ------------------------------------------------------------------- */
    async fetchCodes() {
      try {
        const response = await axios.get('/subjects/codes');
        if (response?.status === 200) {
          this.codes = response.data.data || response.data || [];
        }
      } catch (error) {
        console.error('Error fetching subject codes:', error);
      }
    },

    /* -------------------------------------------------------------------
     * FETCH SUBJECT TYPES
     * ------------------------------------------------------------------- */
    async fetchTypes() {
      try {
        const response = await axios.get('/subjects/types');
        if (response?.status === 200) {
          this.types = response.data.data || response.data || [];
        }
      } catch (error) {
        console.error('Error fetching subject types:', error);
      }
    },

    /* -------------------------------------------------------------------
     * CREATE SUBJECT
     * ------------------------------------------------------------------- */
    async store(payload) {
      try {
        const response = await axios.post('/subjects', payload);
        if (response?.status === 201) return true;
      } catch (error) {
        console.error('Error creating subject:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * UPDATE SUBJECT
     * ------------------------------------------------------------------- */
    async update(id, payload) {
      try {
        const response = await axios.post(`/subjects/${id}`, {
          ...payload,
          _method: 'PUT'
        });
        if (response?.status === 200) return true;
      } catch (error) {
        console.error('Error updating subject:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * DELETE SUBJECT
     * ------------------------------------------------------------------- */
    async destroy() {
      if (!this.id) return false;
      try {
        const response = await axios.delete(`/subjects/${this.id}`);
        if (response?.status === 204 || response?.status === 200) {
          this.id = null;
          return true;
        }
      } catch (error) {
        console.error('Error deleting subject:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * EXPORT SUBJECTS
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/subjects/export?type=${this.exportType}`;
        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting subjects:', error);
      }
      return false;
    }
  }
})
