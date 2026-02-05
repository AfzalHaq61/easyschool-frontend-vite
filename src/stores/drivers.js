import { defineStore } from 'pinia';
import axios from 'axios';
import { useNotificationStore } from "./notification";

export const useDriversStore = defineStore('drivers', {
  state: () => ({
    drivers: [],
    loading: false,
    error: null,
    total: 0,
    perPage: 10,
    currentPage: 1,
    lastPage: 1,
    search: '',
    status: null,
    sort: 'asc',
    dateStart: '',
    dateEnd: '',
    exportType: 'pdf',
    id: null, // For Delete
  }),

  actions: {
    async index() {
      this.loading = true;
      try {
        const params = {
          per_page: this.perPage,
          page: this.currentPage,
          search: this.search?.trim() || null,
          sort: this.sort,
          status: this.status,
          date_start: this.dateStart,
          date_end: this.dateEnd
        }
        const response = await axios.get('/drivers', { params });
        this.drivers = response.data.data;
        this.total = response.data.meta.total;
        this.lastPage = response.data.meta.last_page;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching drivers';
        const notificationStore = useNotificationStore();
        notificationStore.setNotification({
            status: 'error',
            message: this.error
        });
      } finally {
        this.loading = false;
      }
    },

    async store(driverData) {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.post('/drivers', driverData);
            notificationStore.setNotification({
                status: 'success',
                message: 'Driver added successfully'
            });
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error adding driver'
            });
            return false;
        } finally {
            this.loading = false;
        }
    },

    async update(id, driverData) {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.post(`/drivers/${id}?_method=PUT`, driverData);
            notificationStore.setNotification({
                status: 'success',
                message: 'Driver updated successfully'
            });
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error updating driver'
            });
            return false;
        } finally {
            this.loading = false;
        }
    },

    async destroy() {
        if(!this.id) return;
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.delete(`/drivers/${this.id}`);
            notificationStore.setNotification({
                status: 'success',
                message: 'Driver deleted successfully'
            });
            this.id = null; // Reset ID after delete
            this.index();
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error deleting driver'
            });
        } finally {
            this.loading = false;
        }
    },

    async export() {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            const response = await axios.get('/drivers/export', {
                params: { type: this.exportType, search: this.search, sort: this.sort },
                responseType: 'blob'
            });
             
            if (this.exportType === 'print') {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'text/html' }));
                const printWindow = window.open(url, '_blank');
                printWindow.onload = function() {
                  printWindow.print();
                };
            } else {
                 const url = window.URL.createObjectURL(new Blob([response.data]));
                 const link = document.createElement('a');
                 link.href = url;
                 // Extract filename or set default
                 const filename = `drivers-export.${this.exportType === 'excel' ? 'xlsx' : 'pdf'}`;
                 link.setAttribute('download', filename);
                 document.body.appendChild(link);
                 link.click();
                 link.remove();
            }

        } catch (error) {
           notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error exporting drivers'
            });
        } finally {
            this.loading = false;
        }
    }
  }
});
