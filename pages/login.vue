<template>
  <div
    class="
      app
      flex-column
      align-items-center
      justify-content-center
      login-background
      px-2
    "
  >
    <b-card class="mx-auto login-box p-2 shadow my-auto">
      <b-row class="bg-logo-color" align-v="center">
        <b-col cols="12">
          <b-img
            class="mx-auto d-block mb-3 w-75"
            src=""
          ></b-img>
        </b-col>
        <b-col cols="12" class="mb-3">
          <b-form-input
            v-model="email"
            type="email"
            placeholder="อีเมล"
            @keyup="validateEmail"
            :state="email && !isValidate ? false : null"
          ></b-form-input>
          <b-form-invalid-feedback
            id="input-live-feedback"
            v-if="email && !isValidate"
          >
            กรุณากรอกอีเมลให้ถูกต้อง
          </b-form-invalid-feedback>
        </b-col>
        <b-col cols="12" class="mb-3">
          <b-input-group>
            <b-form-input
              id="password"
              v-model="password"
              :type="!showPassword ? `password` : `text`"
              placeholder="รหัสผ่าน"
            />
            <template #append>
              <b-button
                id="showPassword"
                variant="outline"
                @click="showPassword = !showPassword"
              >
                <em
                  :class="
                    !showPassword
                      ? `fa-regular fa-eye-slash`
                      : `fa-regular fa-eye`
                  "
                />
              </b-button>
            </template>
          </b-input-group>
        </b-col>
        <b-col cols="12" class="mb-3 d-flex justify-content-center">
          <b-button pill block variant="primary" @click="send">
            เข้าสู่ระบบ
          </b-button>
        </b-col>
      </b-row>
    </b-card>
    <AppFooter class="w-100" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AppFooter from "~/components/Footer";

export default {
  name: "Login",
  layout: "full",
  components: {
    AppFooter,
  },
  computed: {
    ...mapState("auth", ["isLoggedIn"]),
  },
  mounted() {
    let token = localStorage.getItem("token");
    if (token) {
      this.$router.push(`/`);
    }
  },
  data() {
    return {
      email: null,
      password: null,
      showError: false,
      isValidate: null,
      showPassword: false,
    };
  },
  methods: {
    ...mapActions("auth", ["login", "getMe", "logout"]),
    send() {
      this.login({ email: this.email, password: this.password })
        .then(() => {
          this.$axios.get("/api/auth/me").then((response) => {
            if(localStorage.getItem(`token`)) {
              if(response.data.roleGroup.roles.find(data => data.id === 12)) {
                this.$router.push(`/worklog`);
              } else {
                this.$router.push(`/`);
              }
            }
          });
        })
        .catch((error) => {
          this.$swal.fire({
            title: `เกิดข้อผิดพลาด`,
            text: error.response.data.detail || error.response.data.message,
            icon: "error",
            confirmButtonText: `ตกลง`,
          });
        });
    },
    validateEmail() {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.email)) {
        this.isValidate = true;
      } else {
        this.isValidate = false;
      }
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/bootstrap/_bootstrap-variables";
.login-background {
  background-color: white;
}
.login_button {
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #ffff !important;
  color: #000000 !important;
}
.box-shadow-button-social {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.09);
  background-color: white;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 5px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid $primary;
  text-align: center;
  &:focus {
    outline: none;
  }
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (min-width: 990px) {
  .vl {
    border-left: 2px solid #dadada;
  }
  .img-margin {
    margin-bottom: 6rem;
  }
  .login_button {
    width: 60%;
    margin-bottom: 10px;
  }
}
.login-box {
  width: 400px;
  max-width: 100%;
}
#password {
  border-right: white;
}
#showPassword {
  border: 1px solid #e3e8ec;
  border-left: white;
}
// .login-logo {
//   height: 150px;
// }
</style>
