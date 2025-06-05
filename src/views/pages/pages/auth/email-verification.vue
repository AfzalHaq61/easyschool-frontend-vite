<template>
  <div class="col-md-9 mx-auto p-4">
    <Form
      @submit="submitForm"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div>
        <div class="mx-auto mb-5 text-center">
          <img
            src="@/assets/img/authentication/authentication-logo.svg"
            class="img-fluid"
            alt="Logo"
          />
        </div>
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <h2 class="mb-2 text-center">Verify your Email</h2>
              <p class="mb-0 text-center">
                We've sent a link to your email Please
                follow the link inside to continue
              </p>
            </div>
            <div class="text-center mb-3">
              <h6 class="fw-normal text-dark mb-0">
                Didn’t receive an email?
              </h6>
            </div>
            <button type="submit" class="btn btn-primary w-100">
              Resend Email
            </button>
          </div>
        </div>
        <div class="mt-5 text-center">
          <p class="mb-0">Copyright &copy; {{ new Date().getFullYear() }} - EasySchool</p>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
  import { Form } from "vee-validate";
  import { useAuthStore } from '@/stores/auth';
  import { ref } from 'vue';

  // State variables
  const authStore = useAuthStore();
  const notification = ref([]);

  // Access user credentials
  const user = authStore.user;
  const token = authStore.token;

  const submitForm = async () => {
    await authStore.emailVerification();

    if (authStore.notification) {
      notification.value = {
        status: authStore.notification.status,
        message: authStore.notification.message,
      };
    }
  }
</script>
