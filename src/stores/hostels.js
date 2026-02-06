import { defineStore } from 'pinia';
import axios from 'axios';
import { useNotificationStore } from './notification';

export const useHostelsStore = defineStore('hostels', {
  state: () => ({
    hostels: [],
    loading: false,
    errorMessage: null,
    total: 0,
    perPage: 10,
    currentPage: 1,
    search: '',
    status: null,
    type: null, // Boys, Girls, Mixed
    sort: 'recent_added',
    dateStart: null,
    dateEnd: null,
    exportType: 'pdf',
    id: null,
  }),

  actions: {
    async index() {
      this.loading = true;
      try {
        const response = await axios.get('/hostels', {
          params: {
            page: this.currentPage,
            per_page: this.perPage,
            search: this.search,
            status: this.status,
            type: this.type,
            sort: this.sort,
            date_start: this.dateStart,
            date_end: this.dateEnd,
          },
        });
        this.hostels = response.data.data;
        this.total = response.data.meta.total;
        this.loading = false;
      } catch (error) {
        this.errorMessage = error.message;
        this.loading = false;
      }
    },

    async store(data) {
      const notificationStore = useNotificationStore();
      this.loading = true;
      try {
        const response = await axios.post('/hostels', data);
        notificationStore.setNotification({ message: 'Hostel added successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to add hostel', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async update(id, data) {
      const notificationStore = useNotificationStore();
      this.loading = true;
      try {
        const response = await axios.put(`/hostels/${id}`, data);
        notificationStore.setNotification({ message: 'Hostel updated successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to update hostel', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async destroy(id) {
      const notificationStore = useNotificationStore();
      this.loading = true;
      try {
        await axios.delete(`/hostels/${id}`);
        notificationStore.setNotification({ message: 'Hostel deleted successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to delete hostel', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async export() {
      try {
        const response = await axios.get('/hostels/export', {
          params: { type: this.exportType },
          responseType: 'blob',
        });
        
        if (this.exportType === 'print') {
          const blob = new Blob([response.data], { type: 'text/html' });
          const url = window.URL.createObjectURL(blob);
          const printWindow = window.open(url);
          printWindow.print();
        } else {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', `hostels.${this.exportType === 'excel' ? 'xlsx' : 'pdf'}`);
          document.body.appendChild(link);
          link.click();
          link.remove();
        }
      } catch (error) {
        console.error('Export failed:', error);
      }
    },
  },
});
