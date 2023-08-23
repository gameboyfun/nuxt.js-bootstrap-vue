<template>
  <router-link tag="li" class="nav-item nav-dropdown" :to="url" disabled>
    <div class="nav-link nav-dropdown-toggle" @click="handleClick">
      <em :class="icon" class="mr-2" v-if="icon" />
      <img :src="img" v-if="img" :alt="img" class="mr-2 setImageSize" />
      <span :style="styleClass">{{ name }}</span>
    </div>
    <ul class="nav-dropdown-items">
      <slot></slot>
    </ul>
  </router-link>
</template>

<script>
export default {
  props: {
    styleClass: {
      type: String,
      default: ""
    },
    nameClass: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle("open");
    }
  }
};
</script>
<style lang="css">
.setImageSize {
  width: 20px !important;
  height: 20px !important;
}
</style>
