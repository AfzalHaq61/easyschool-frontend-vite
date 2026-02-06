import { defineStore } from 'pinia'
import axios from 'axios'

export const usePermissionsStore = defineStore('permissions', {
  state: () => ({
    permissions: [],
    currentPage: 1,
    perPage: 10,
    total: 0,
    search: '',
    roleId: null, // To track which role we are editing
  }),

  actions: {
    /* -------------------------------------------------------------------
     * FETCH PERMISSIONS (MODULES)
     * ------------------------------------------------------------------- */
    async index() {
      try {
        const params = {
          page: this.currentPage,
          per_page: this.perPage,
          search: this.search?.trim() || null,
          roles_id: this.roleId,
          role_id: this.roleId // Support both
        }
        const response = await axios.get('/permissions', { params })

        if (response?.status === 200) {
          const rawData = response.data.data || response.data || [];
          this.permissions = Array.isArray(rawData) ? rawData : (rawData?.data || []);
          this.currentPage = response.data.meta?.current_page || 1;
          this.total = response.data.meta?.total || 0;
        }
      } catch (error) {
        console.error('Error fetching permissions:', error.response?.data || error);
        this.permissions = [];
      }
    },

    /* -------------------------------------------------------------------
     * UPDATE PERMISSION
     * ------------------------------------------------------------------- */
    async updatePermission(module, type, value) {
      if (!this.roleId) {
          // If no role selected, maybe warn user? 
          // For now we just return.
          console.warn("No Role ID selected for permission update");
          return false;
      }
      try {
        const payload = {
            role_id: this.roleId,
            module: module,
            type: type,
            value: value
        };
        const response = await axios.put(`/permissions/${this.roleId}`, payload); // Using roleID as key or generic 'update' endpoint
        
        if (response?.status === 200) {
            return true;
        }
      } catch (error) {
        console.error('Error updating permission:', error.response?.data || error);
      }
      return false;
    }
  }
})
