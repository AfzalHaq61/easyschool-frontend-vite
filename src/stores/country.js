import { defineStore } from 'pinia';
import axios from 'axios';

export const useCountryStore = defineStore('country', {
  state: () => ({
    countries: [],
    loading: false,
    errorMessage: null,
  }),

  actions: {
    async fetchCountries() {
      this.loading = true;
      try {
        const response = await axios.get('/countries');
        this.countries = response.data.data.countries;
        this.loading = false;
      } catch (error) {
        this.errorMessage = error.message;
        this.loading = false;
      }
    },
  },
});
