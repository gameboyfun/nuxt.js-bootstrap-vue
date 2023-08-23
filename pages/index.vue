<template>
  <div class="container w-100 py-4"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async mounted() {
    // await new Promise(async (resolve) => {
    //   if (this.user) {
    //     this.nameOptions = [
    //       {
    //         text: `${this.user?.firstName} ${this.user?.lastName} (${this.user?.nickname})`,
    //         value: null,
    //       },
    //     ];
    //     if (this.user.roleGroupId === 3 || this.user.positionId === 1) {
    //       await this.getName();
    //     }
    //     resolve();
    //   } else {
    //     this.$watch("user", async (newValue) => {
    //       if (newValue) {
    //         this.nameOptions = [
    //           {
    //             text: `${this.user?.firstName} ${this.user?.lastName} (${this.user?.nickname})`,
    //             value: null,
    //           },
    //         ];
    //         if (this.user.roleGroupId === 3 || this.user.positionId === 1) {
    //           await this.getName();
    //         }
    //         resolve();
    //       }
    //     });
    //   }
    // });
    // this.getAll();
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
