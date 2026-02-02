<template>
  <div class="col-md-8 mx-auto p-4">
    <Form @submit="submitForm" :validation-schema="schema" v-slot="{ errors }">
      <div>
        <div class="mx-auto mb-5 text-center">
          <img src="@/assets/img/authentication/authentication-logo.svg" class="img-fluid" alt="Logo" />
        </div>
        <div class="card">
          <div class="card-body">
            <div class="mb-4">
              <h2 class="mb-2">Forgot Password?</h2>
              <p class="mb-0">
                If you forgot your password, well, then we’ll email you
                instructions to reset your password.
              </p>
            </div>

            <!-- Using the alert component -->
            <Alert v-if="notification" :type="notification.status === 'error' ? 'danger' : notification.status"
              :icon="notification.status === 'error' ? 'alert-octagon' : 'check-circle'" :message="notification.message"
              @update:message="notification.message = $event" />

            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <div class="input-icon mb-3 position-relative">
                <span class="input-icon-addon">
                  <i class="ti ti-mail"></i>
                </span>
                <Field name="email" type="text" v-model="email" class="form-control"
                  :class="{ 'is-invalid': errors.email }" />
                <div class="invalid-feedback">
                  {{ errors.email }}
                </div>
              </div>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary w-100">
                Send Password Reset Link
              </button>
            </div>
            <div class="text-center">
              <h6 class="fw-normal text-dark mb-0">
                Return to
                <router-link to="/" class="hover-a"> Login</router-link>
              </h6>
            </div>
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
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import Alert from "@/components/shared/alert.vue";

// State variables
const authStore = useAuthStore();
const email = ref('superadmin@gmail.com');
const notification = ref([]);

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
});

const submitForm = async () => {
  notification.value = null;
  const result = await authStore.forgotPassword(email.value);

  if (result.success) {
    notification.value = {
      status: 'success',
      message: result.message,
    };
  } else {
    notification.value = {
      status: 'error',
      message: result.message,
    };
  }
}
</script>
