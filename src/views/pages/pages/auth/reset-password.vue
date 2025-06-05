<template>
  <div class="col-md-8 mx-auto p-4">
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
            <div class="mb-4">
              <h2 class="mb-2">Reset Password?</h2>
              <p class="mb-0">
                Enter New Password & Confirm Password to get inside
              </p>
            </div>

            <!-- Using the alert component -->
            <Alert v-if="notification" :type="notification.status === 'error' ? 'danger' : notification.status" :icon="notification.status === 'error' ? 'alert-octagon' : 'check-circle'" :message="notification.message" @update:message="notification.message = $event" />

            <div class="mb-3">
              <label class="form-label">New Password</label>
              <div class="pass-group">
                <Field
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="form-control pass-input mt-2"
                  :class="{ 'is-invalid': errors.password }"
                />
                <span
                  class="ti toggle-password"
                  :class="showPassword ? 'ti-eye' : 'ti-eye-off'"
                  @click="togglePasswordVisibility"
                ></span>
                <div class="invalid-feedback">
                  {{ errors.password }}
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">New Confirm Password</label>
              <div class="pass-group">
                <Field
                  name="confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  v-model="confirmPassword"
                  class="form-control pass-input mt-2"
                  :class="{ 'is-invalid': errors.confirmPassword }"
                />
                <span
                  class="ti toggle-password"
                  :class="showConfirmPassword ? 'ti-eye' : 'ti-eye-off'"
                  @click="toggleConfirmPasswordVisibility"
                ></span>
                <div class="invalid-feedback">
                  {{ errors.confirmPassword }}
                </div>
              </div>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary w-100">
                Change Password
              </button>
            </div>
            <div class="text-center">
              <h6 class="fw-normal text-dark mb-0">
                Return to<router-link to="/login" class="hover-a">
                  Login</router-link
                >
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
  import { router } from "@/router";
  import { useRoute } from "vue-router";
  import { Form, Field} from "vee-validate";
  import * as Yup from "yup";
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import Alert from "@/components/shared/alert.vue";

  // State variables
  const authStore = useAuthStore();
  const route = useRoute()

  // Reactive variables for password fields
  const email = ref(route.query.email); // Extract 'email' from URL
  const token = ref(route.query.token); // Extract 'token' from URL
  const password = ref("superadmin001");
  const confirmPassword = ref("superadmin001");
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  const notification = ref([]);

  const schema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/\d/, "Password must contain at least one number"),

    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref('password'), null], "Passwords must match"),
  });

  // Method to toggle password visibility
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
  const toggleConfirmPasswordVisibility = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
  };

  const submitForm = async () => {
    const payload = {
      email: email.value,
      token: token.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
    };

    // Call the forgotPassword function in the authStore
    await authStore.resetPassword(payload);

    if (authStore.notification) {
      notification.value = {
        status: authStore.notification.status,
        message: authStore.notification.message,
      };
    } else {
      router.push('/reset-password-success');
    }
  };
</script>
