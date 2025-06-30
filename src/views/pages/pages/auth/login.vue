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
              <h2 class="mb-2">Welcome</h2>
              <p class="mb-0">
                Please enter your details to sign in
              </p>
            </div>
            <div class="mt-4">
              <div
                class="d-flex align-items-center justify-content-center flex-wrap"
              >
                <div class="text-center me-2 flex-fill">
                  <a
                    href="javascript:void(0);"
                    class="bg-primary br-10 p-2 btn btn-primary d-flex align-items-center justify-content-center"
                  >
                    <img
                      class="img-fluid m-1"
                      src="@/assets/img/icons/facebook-logo.svg"
                      alt="Facebook"
                    />
                  </a>
                </div>
                <div class="text-center me-2 flex-fill">
                  <a
                    href="javascript:void(0);"
                    class="br-10 p-2 btn btn-outline-light d-flex align-items-center justify-content-center"
                  >
                    <img
                      class="img-fluid m-1"
                      src="@/assets/img/icons/google-logo.svg"
                      alt="Facebook"
                    />
                  </a>
                </div>
                <div class="text-center flex-fill">
                  <a
                    href="javascript:void(0);"
                    class="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                  >
                    <img
                      class="img-fluid m-1"
                      src="@/assets/img/icons/apple-logo.svg"
                      alt="Apple"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="login-or">
              <span class="span-or">Or</span>
            </div>

            <!-- Using the alert component -->
            <Alert v-if="notification" :type="notification.status === 'error' ? 'danger' : notification.status" :icon="notification.status === 'error' ? 'alert-octagon' : 'check-circle'" :message="notification.message" @update:message="notification.message = $event" />

            <div class="mb-3">
              <label class="form-label">Email Address</label>
              <div class="input-icon mb-3 position-relative">
                <span class="input-icon-addon">
                  <i class="ti ti-mail"></i>
                </span>
                <Field
                  name="email"
                  type="text"
                  v-model="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors.email }"
                />
                <div class="invalid-feedback">
                  {{ errors.email }}
                </div>
              </div>
              <label class="form-label">Password</label>
              <div class="pass-group">
                <Field
                  name="password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  class="form-control pass-input mt-2"
                  :class="{ 'is-invalid': errors.password }"
                />
                <span @click="toggleShow" class="toggle-password">
                  <i
                    :class="{
                      'ti ti-eye': showPassword,
                      'ti ti-eye-off': !showPassword,
                    }"
                  ></i>
                </span>
                <div class="invalid-feedback">
                  {{ errors.password }}
                </div>
                <div
                  class="emailshow text-danger"
                  id="password"
                ></div>
              </div>
            </div>

            <div class="form-wrap form-wrap-checkbox mb-3">
              <div class="d-flex align-items-center">
                <div class="form-check form-check-md mb-0">
                  <input
                    class="form-check-input mt-0"
                    type="checkbox"
                  />
                </div>
                <p class="ms-1 mb-0">Remember Me</p>
              </div>
              <div class="text-end">
                <router-link
                  to="/forgot-password"
                  class="link-danger"
                  >Forgot Password?</router-link
                >
              </div>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary w-100">
                Sign In
              </button>
            </div>
          </div>
        </div>
        <div class="mt-5 text-center">
          <p>
            Copyright &copy; {{ new Date().getFullYear() }} -
            EasySchool
          </p>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup>
  import { router } from "@/router";
  import { Form, Field} from "vee-validate";
  import * as Yup from "yup";
  import { ref, computed } from 'vue';
  import { useAuthStore } from '@/stores/auth';
  import Alert from "@/components/shared/alert.vue";
  import { useNotificationStore } from '@/stores/notification';

  // State variables
  const authStore = useAuthStore();
  const notificationStore = useNotificationStore();
  const email = ref('superadmin@gmail.com');
  const password = ref('superadmin');
  const showPassword = ref(false);
  const notification = ref([]);

  // Computed property for button label
  computed(() => (showPassword.value ? "Hide" : "Show"));

  // Toggle password visibility
  const toggleShow = () => {
    showPassword.value = !showPassword.value;
  };

  const schema = Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .email("Email is invalid"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    });

  const submitForm = async () => {
    const success = await authStore.login(email.value, password.value);

    if (success && authStore.user) {
      router.push("/");    
    } else {
      notificationStore.setNotification({ status: 'error', message: 'Failed to login.' });
    }
  };
</script>
