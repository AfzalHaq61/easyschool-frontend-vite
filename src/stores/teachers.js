import { defineStore } from 'pinia';
import axios from 'axios';

export const useTeachersStore = defineStore('teachers', {
  state: () => ({
    teachers: [],
    currentPage: 1,
    perPage: 10,
    total: 0,
  }),

  actions: {
    async index() {
      try {
        const response = await axios.get('/users', {
            params: {
                role: 'teacher'
            }
        });
        if (response?.status === 200) {
          this.teachers = response.data.data || [];
          return true;
        }
      } catch (error) {
        console.error('Error fetching teachers:', error.response?.data || error);
        return false;
      }
    },
  },
});
