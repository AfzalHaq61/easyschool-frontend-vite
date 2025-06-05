// stores/notification.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotificationStore = defineStore('notification', () => {
  const notification = ref(null);

  function setNotification({ status, message }) {
    notification.value = { status, message };
  }

  function clearNotification() {
    notification.value = null;
  }

  return {
    notification,
    setNotification,
    clearNotification,
  };
});
