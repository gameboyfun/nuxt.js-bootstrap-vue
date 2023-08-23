<template>
  <div v-if="isExternalLink">
    <b-link :disabled="disabled" @click="openLink(url)" :class="classList">
      <em :class="icon" class="mr-2" v-if="icon" />
      <img
        :src="img ? require(`/assets/img${img}`) : null"
        :blank="!img"
        alt=""
        v-if="img"
        class="setImageSize"
      />
      <span :class="nameClass">{{ name }}</span>
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{
        badge.text
      }}</b-badge>
    </b-link>
  </div>
  <div v-else>
    <b-link
      :disabled="disabled"
      :exact="url === '/'"
      :active="url === `/${url}`"
      :to="{ path: url, query: { page: 1 } }"
      :class="classList"
      active-class="active"
    >
      <em :class="icon" class="mr-2" v-if="icon" />
      <b-img
        :src="img ? require(`/assets/img${img}`) : null"
        :blank="!img"
        alt=""
        v-else
        class="setImageSize"
      />
      <span :style="styleClass">{{ name }}</span>
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{
        badge.text
      }}</b-badge>
    </b-link>
  </div>
</template>

<script>
import { sanitizeUrl } from "@braintree/sanitize-url"
import Vue from 'vue';

Vue.prototype.$sanitize = sanitizeUrl

export default {
  name: "sidebar-nav-link",
  props: {
    styleClass: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    nameClass: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    badge: {
      type: Object,
      default: () => {},
    },
    variant: {
      type: String,
      default: "",
    },
    classes: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return ["nav-link", this.linkVariant, ...this.itemClasses];
    },
    linkVariant() {
      return this.variant ? `nav-link-${this.variant}` : "";
    },
    itemClasses() {
      return this.classes ? this.classes.split(" ") : [];
    },
    isExternalLink() {
      return this.url.substring(0, 4) === "http";
    },
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank');
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
