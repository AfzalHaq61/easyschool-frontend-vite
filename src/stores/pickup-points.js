import { defineStore } from 'pinia'
import axios from 'axios'

export const usePickupPointsStore = defineStore('pickupPoints', {
  state: () => ({
    pickupPoints: [],
    id: null,
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
     * FETCH PICKUP POINTS
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
        const response = await axios.get('/pickup-points', { params })

        if (response?.status === 200) {
          this.pickupPoints = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;
        }
      } catch (error) {
        console.error('Error fetching pickup points:', error.response?.data || error);
        this.pickupPoints = [];
        this.currentPage = 1;
        this.total = 0;
      }
    },

    /* -------------------------------------------------------------------
     * CREATE PICKUP POINT
     * ------------------------------------------------------------------- */
    async store(payload) {
      try {
        const response = await axios.post('/pickup-points', payload);
        if (response?.status === 201) return true;
      } catch (error) {
        console.error('Error creating pickup point:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * UPDATE PICKUP POINT
     * ------------------------------------------------------------------- */
    async update(id, payload) {
      try {
        const response = await axios.post(`/pickup-points/${id}`, {
          ...payload,
          _method: 'PUT'
        });
        if (response?.status === 200) return true;
      } catch (error) {
        console.error('Error updating pickup point:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * DELETE PICKUP POINT
     * ------------------------------------------------------------------- */
    async destroy() {
      if (!this.id) return false;
      try {
        const response = await axios.delete(`/pickup-points/${this.id}`);
        if (response?.status === 204 || response?.status === 200) {
          this.id = null;
          return true;
        }
      } catch (error) {
        console.error('Error deleting pickup point:', error.response?.data || error);
      }
      return false;
    },

    /* -------------------------------------------------------------------
     * EXPORT PICKUP POINTS
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/pickup-points/export?type=${this.exportType}`;
        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting pickup points:', error);
      }
      return false;
    }
  }
})
