import { defineStore } from 'pinia';
import axios from 'axios';
import { useNotificationStore } from "./notification";

export const useVehiclesStore = defineStore('vehicles', {
  state: () => ({
    vehicles: [],
    loading: false,
    error: null,
    total: 0,
    perPage: 10,
    currentPage: 1,
    lastPage: 1,
    search: '',
    status: null,
    vehicle_model: null,
    made_year: null,
    gps_device_id: null,
    driver_id: null,
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
          status: this.status === 'Select' ? null : this.status,
          vehicle_model: this.vehicle_model === 'Select' ? null : this.vehicle_model,
          made_year: this.made_year === 'Select' ? null : this.made_year,
          gps_device_id: this.gps_device_id === 'Select' ? null : this.gps_device_id,
          driver_id: this.driver_id === 'Select' ? null : this.driver_id,
          date_start: this.dateStart,
          date_end: this.dateEnd
        }
        const response = await axios.get('/vehicles', { params });
        this.vehicles = response.data.data;
        this.total = response.data.meta.total;
        this.lastPage = response.data.meta.last_page;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching vehicles';
        const notificationStore = useNotificationStore();
        notificationStore.setNotification({
            status: 'error',
            message: this.error
        });
      } finally {
        this.loading = false;
      }
    },

    async store(vehicleData) {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.post('/vehicles', vehicleData);
            notificationStore.setNotification({
                status: 'success',
                message: 'Vehicle added successfully'
            });
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error adding vehicle'
            });
            return false;
        } finally {
            this.loading = false;
        }
    },

    async update(id, vehicleData) {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.post(`/vehicles/${id}?_method=PUT`, vehicleData);
            notificationStore.setNotification({
                status: 'success',
                message: 'Vehicle updated successfully'
            });
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error updating vehicle'
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
            await axios.delete(`/vehicles/${this.id}`);
            notificationStore.setNotification({
                status: 'success',
                message: 'Vehicle deleted successfully'
            });
            this.id = null; // Reset ID after delete
            this.index();
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error deleting vehicle'
            });
        } finally {
            this.loading = false;
        }
    },

    async export() {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            const response = await axios.get('/vehicles/export', {
                params: { 
                    type: this.exportType, 
                    search: this.search, 
                    sort: this.sort,
                    status: this.status,
                    vehicle_model: this.vehicle_model,
                    made_year: this.made_year,
                    gps_device_id: this.gps_device_id,
                    driver_id: this.driver_id
                },
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
                 const filename = `vehicles-export.${this.exportType === 'excel' ? 'xlsx' : 'pdf'}`;
                 link.setAttribute('download', filename);
                 document.body.appendChild(link);
                 link.click();
                 link.remove();
            }

        } catch (error) {
           notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error exporting vehicles'
            });
        } finally {
            this.loading = false;
        }
    }
  }
});
