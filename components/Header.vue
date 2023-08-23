<template>
  <header class="app-header navbar">
    <button
      class="navbar-toggler mobile-sidebar-toggler d-lg-none"
      type="button"
      @click="mobileSidebarToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-link class="navbar-brand displaylogo text-center" @click="goTo">
      <img
        class="h-100"
        style="object-fit: cover"
        src=""
        alt=""
      />
    </b-link>
    <button
      class="navbar-toggler sidebar-toggler d-md-down-none d-lg-none"
      type="button"
      @click="sidebarToggle"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <b-navbar-nav class="mx-4">
      <b-nav-item-dropdown left class="nav-popup d-flex align-items-center">
        <template slot="button-content">
          <b-avatar
            badge-top
            badge-variant="danger"
            badge-offset="-0.6rem"
            class="bg-white border border-primary"
            :class="user?.imageProfile ? `haveProfileImg` : ``"
            size="3rem"
            :src="user?.imageProfile"
            @click="$refs.imageProfile.click()"
          >
          </b-avatar>
          <strong class="d-none d-sm-inline" style="vertical-align: middle">
            <div style="max-width: 120px" class="d-inline-block text-truncate text-white">
              {{
                `${
                  user?.firstName && user?.lastName
                    ? `${user?.firstName} ${user?.lastName}`
                    : user?.firstName || user?.lastName
                    ? `${user?.firstName || ""} ${user?.lastName || ""}`
                    : "-"
                }`
              }}
            </div>
          </strong>
        </template>
        <b-dropdown-item :to="`/profile`">
          <b-img src="~/static/header/user.png" class="mr-1" />
          ข้อมูลผู้ใช้งาน
        </b-dropdown-item>
        <b-dropdown-item @click="onLogout">
          <b-img src="~/static/header/logout.png" class="mr-1" />
          ออกจากระบบ
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </header>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "c-header",
  middleware: "auth",
  computed: {
    ...mapState("auth", ["user"]),
    route() {
      return this.$route.path;
    },
  },
  methods: {
    ...mapActions("auth", ["logout", "getMe"]),
    onLogout() {
      this.logout({}).then(() => {
        this.$router.push(`/login`);
      });
    },
    sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-hidden");
    },
    sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-minimized");
    },
    mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-mobile-show");
    },
    asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle("aside-menu-hidden");
    },
    goTo() {
      this.$axios
        .get("/api/auth/me")
        .then((response) => {
          if (
            response.data.roleGroup.roles.find(
              (data) => data.id === 12
            )
          ) {
            this.$router.push(`/worklog`);
          } else {
            this.$router.push(`/`);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$swal.fire({
            title: `เกิดข้อผิดพลาด`,
            text: error.response.data.detail || error.response.data.message,
            icon: "error",
            confirmButtonText: `ตกลง`,
          });
        });
    },
  },
};
</script>

<style lang="css">
.user-profile-icon {
  border-radius: 50%;
  width: 42px;
  height: 42px;
}
.nav-popup {
  list-style-type: none;
}
.pointer {
  cursor: pointer;
}
@media (max-width: 991px) {
  .displaylogo {
    display: none !important;
  }
}
</style>
