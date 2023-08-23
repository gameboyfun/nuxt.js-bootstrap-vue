<template>
  <div
    class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden"
  >
    <div class="app">
      <AppHeader />
      <div class="app-body">
        <Sidebar :navItems="navItems" />
        <main class="main setColor">
          <div class="container-fluid ">
            <nuxt />
          </div>
        </main>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import nav from "../_nav";
import AppHeader from "~/components/Header";
import AppFooter from "~/components/Footer";
import Sidebar from "~/components/Sidebar/Sidebar";

export default {
  middleware: "auth",
  name: "default",
  components: {
    AppHeader,
    AppFooter,
    Sidebar
  },
  mounted: function() {},
  head() {
    return {
      bodyAttrs: {
        class:
          "app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden"
      }
    };
  },
  methods: {},
  computed: {
    ...mapState("auth", ["user"]),
    navItems() {
      return nav.items;
      
    },
    name() {
      return this.$route.name;
    },
    list() {
      return this.$route.matched;
    }
  },
  data() {
    return {
      listenersStarted: false,
      permissionGranted: false,
      loading: false
    };
  }
};
</script>
<style scoped>
.setColor {
  background-color: white ;
}
</style>
