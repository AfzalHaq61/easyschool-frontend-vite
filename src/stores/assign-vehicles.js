import { defineStore } from 'pinia';
import axios from 'axios';
import { useNotificationStore } from "./notification";

export const useAssignVehiclesStore = defineStore('assignVehicles', {
  state: () => ({
    assignVehicles: [],
    loading: false,
    error: null,
    total: 0,
    perPage: 10,
    currentPage: 1,
    lastPage: 1,
    search: '',
    status: null,
    pickup_point_id: null,
    vehicle_number: null,
    route_id: null,
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
          pickup_point_id: this.pickup_point_id === 'Select' ? null : this.pickup_point_id,
          vehicle_number: this.vehicle_number === 'Select' ? null : this.vehicle_number,
          route_id: this.route_id === 'Select' ? null : this.route_id,
          driver_id: this.driver_id === 'Select' ? null : this.driver_id,
          date_start: this.dateStart,
          date_end: this.dateEnd
        }
        const response = await axios.get('/assign-vehicles', { params });
        console.log(response.data.data);
        this.assignVehicles = response.data.data;
        this.total = response.data.meta.total;
        this.lastPage = response.data.meta.last_page;
      } catch (error) {
        this.error = error.response?.data?.message || 'Error fetching assign vehicles';
        const notificationStore = useNotificationStore();
        notificationStore.setNotification({
            status: 'error',
            message: this.error
        });
      } finally {
        this.loading = false;
      }
    },

    async store(assignVehicleData) {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.post('/assign-vehicles', assignVehicleData);
            notificationStore.setNotification({
                status: 'success',
                message: 'Vehicle assigned successfully'
            });
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error assigning vehicle'
            });
            return false;
        } finally {
            this.loading = false;
        }
    },

    async update(id, assignVehicleData) {
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.put(`/assign-vehicles/${id}`, assignVehicleData);
            notificationStore.setNotification({
                status: 'success',
                message: 'Assign vehicle updated successfully'
            });
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error updating assign vehicle'
            });
            return false;
        } finally {
            this.loading = false;
        }
    },

    async destroy() {
        if(!this.id) return false;
        this.loading = true;
        const notificationStore = useNotificationStore();
        try {
            await axios.delete(`/assign-vehicles/${this.id}`);
            notificationStore.setNotification({
                status: 'success',
                message: 'Assign vehicle deleted successfully'
            });
            this.id = null; // Reset ID after delete
            this.index();
            return true;
        } catch (error) {
            notificationStore.setNotification({
                status: 'error',
                message: error.response?.data?.message || 'Error deleting assign vehicle'
            });
            return false;
        } finally {
            this.loading = false;
        }
    },

    async export() {
      try {
        const url = `${axios.defaults.baseURL}/assign-vehicles/export?type=${this.exportType}`;
        if (this.exportType === 'print') {
          window.open(url, '_blank');
        } else {
          window.location.href = url;
        }
        return true;
      } catch (error) {
        console.error('Error exporting assign vehicles:', error);
      }
      return false;
    }
  }
})
