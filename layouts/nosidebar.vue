<template>
  <div
    class="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden"
  >
    <div class="app">
      <AppHeader />
      <div class="app-body">
        <main class="main setColor" style="margin-left: 0px;">
          <div class="container-fluid">
            <nuxt />
          </div>
        </main>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "~/components/Header";
import AppFooter from "~/components/Footer";
export default {
  middleware: "auth",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped>
.setColor {
  background-color: white ;
}
</style>