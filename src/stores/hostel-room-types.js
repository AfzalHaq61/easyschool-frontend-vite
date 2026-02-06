import { defineStore } from 'pinia';
import axios from 'axios';
import { useNotificationStore } from './notification';

export const useHostelRoomTypesStore = defineStore('hostelRoomTypes', {
  state: () => ({
    roomTypes: [],
    loading: false,
    errorMessage: null,
    total: 0,
    perPage: 10,
    currentPage: 1,
    search: '',
    status: null,
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
        const response = await axios.get('/hostel-room-types', {
          params: {
            page: this.currentPage,
            per_page: this.perPage,
            search: this.search,
            status: this.status,
            sort: this.sort,
            date_start: this.dateStart,
            date_end: this.dateEnd,
          },
        });
        this.roomTypes = response.data.data;
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
        const response = await axios.post('/hostel-room-types', data);
        notificationStore.setNotification({ message: 'Hostel Room Type added successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to add hostel room type', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async update(id, data) {
      const notificationStore = useNotificationStore();
      this.loading = true;
      try {
        const response = await axios.put(`/hostel-room-types/${id}`, data);
        notificationStore.setNotification({ message: 'Hostel Room Type updated successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to update hostel room type', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async destroy(id) {
      const notificationStore = useNotificationStore();
      this.loading = true;
      try {
        await axios.delete(`/hostel-room-types/${id}`);
        notificationStore.setNotification({ message: 'Hostel Room Type deleted successfully', status: 'success' });
        this.loading = false;
        return true;
      } catch (error) {
        notificationStore.setNotification({ message: error.response?.data?.message || 'Failed to delete hostel room type', status: 'error' });
        this.loading = false;
        return false;
      }
    },

    async export() {
      try {
        const response = await axios.get('/hostel-room-types/export', {
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
          link.setAttribute('download', `hostel-room-types.${this.exportType === 'excel' ? 'xlsx' : 'pdf'}`);
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
