<template>
  <ul>
    <li :class="classList"></li>
  </ul>
</template>

<script>
export default {
  name: "sidebar-nav-divider",
  props: {
    classes: {
      type: String,
      default: "",
    },
  },
  computed: {
    classList() {
      return ["divider", ...this.itemClasses];
    },
    itemClasses() {
      return this.classes ? this.classes.split(" ") : "";
    },
  },
};
</script>
