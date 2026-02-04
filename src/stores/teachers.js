import { defineStore } from 'pinia'
import axios from 'axios'

export const useTeachersStore = defineStore('teachers', {
  state: () => ({
    teachers: [],
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    classId: null,
    subjectId: null,
    status: null,
    sort: 'asc'
  }),

  actions: {
    async index() {
      try {
        const params = {
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null,
          class_id: this.classId,
          subject_id: this.subjectId,
          status: this.status,
          sort: this.sort
        }
        
        const response = await axios.get('/teachers', { params });

        if (response?.status === 200) {
          this.teachers = response.data.data || [];
          this.currentPage = response.data.current_page || 1;
          this.total = response.data.total || 0;
          return true;
        }
      } catch (error) {
        console.error('Error fetching teachers:', error.response?.data || error);
        this.teachers = [];
        this.total = 0;
        return false;
      }
    },

    async store(formData) {
        try {
            // Must use multipart/form-data
            const response = await axios.post('/teachers', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201 || response.status === 200) {
                return true;
            }
        } catch (error) {
            console.error('Error creating teacher:', error.response?.data || error);
            // Return error messages if possible
            return error.response?.data?.message || false;
        }
        return false;
    }
  },
})
