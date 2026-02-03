import { defineStore } from 'pinia';
import axios from 'axios';

export const useScheduleStore = defineStore('schedule', {
  state: () => ({
    id: '',
    schedules: [],
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
    class_id: null,
    subject_id: null,
    teacher_id: null,
    room_id: null,
    day: null,
    start_time: null,
    end_time: null,
  }),

  actions: {
    /* ---------------------------------------------------------------------
     * FETCH ALL SCHEDULES
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
          class_id: this.class_id,
          subject_id: this.subject_id,
          teacher_id: this.teacher_id,
          room_id: this.room_id,
          day: this.day,
          start_time: this.start_time,
          end_time: this.end_time
        }
        const response = await axios.get('/schedules', { params })
        console.log('Fetching schedules with params:', response);


        if (response?.status === 200) {
          this.schedules = response.data.data || [];
          this.currentPage = response.data.meta?.current_page || 1;
          this.perPage = response.data.meta?.per_page || 10;
          this.total = response.data.meta?.total || 0;
          this.lastPage = response.data.meta?.last_page || 1;

          return true;
        }
      } catch (error) {
        console.error('Error fetching schedules:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * CREATE SCHEDULE
     * ------------------------------------------------------------------- */
    async store(payload) {
      try {
        const response = await axios.post('/schedules', payload);
        if (response?.status === 201) {
          await this.index();
          return true;
        }
      } catch (error) {
        console.error('Error creating schedule:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * UPDATE SCHEDULE
     * ------------------------------------------------------------------- */
    async update(scheduleId, payload) {
      try {
        const response = await axios.put(`/schedules/${scheduleId}`, payload);
        if (response?.status === 200) {
          await this.index();
          return true;
        }
      } catch (error) {
        console.error('Error updating schedule:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * DELETE SCHEDULE
     * ------------------------------------------------------------------- */
    async destroy(scheduleId) {
      try {
        const response = await axios.delete(`/schedules/${scheduleId || this.id}`);
        if (response?.status === 200) {
          this.schedules = this.schedules.filter((item) => item.id !== (scheduleId || this.id));
          return true;
        }
      } catch (error) {
        console.error('Error deleting schedule:', error.response?.data || error);
        return false;
      }
    },

    /* ---------------------------------------------------------------------
     * EXPORT AS PDF OR EXCEL AND PRINT
     * ------------------------------------------------------------------- */
    async export() {
      try {
        const url = `${axios.defaults.baseURL}/schedules/export?type=${this.exportType}`;
        if(this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting schedules:', error.response?.data || error);
        return false;
      }
    }
  },
});
