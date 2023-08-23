<template>
  <div>
    <footer class="app-footer footer-background px-5">
    <!-- <footer class="app-footer footer-background px-5" :style="$route.path.startsWith(`/worklog`) || $route.path.startsWith(`/profile`) ? `margin-left: 0px` : ``"> -->
      <span> สงวนสิทธิ์ &copy; 2566 </span>
      <span class="ml-auto">Version 1.0</span>
    </footer>
  </div>
</template>
<script>
export default {
  name: "c-footer"
};
</script>
<style lang="css">
.footer-background {
  display: flex;
  padding: 18px 0;
  background-color: #ffffff;
}

.top-border-footer {
  background: linear-gradient(
    to right,
    #06a8f0 0%,
    #06a8f0 50%,
    #ff57ab 50%,
    #ff57ab 100%
  );
  padding: 2px;
}
@media (min-width: 991.98px) {
  .top-border-footer {
    background: linear-gradient(
      to right,
      #06a8f0 0%,
      #06a8f0 50%,
      #ff57ab 50%,
      #ff57ab 100%
    );
    margin-left: 260px;
  }
}
</style>
