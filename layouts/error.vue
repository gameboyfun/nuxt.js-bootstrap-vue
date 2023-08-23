<template>
  <div class="mybg" style="height: 100vh; width: 100wh">
    <div class="h-100 d-flex align-items-center">
      <b-row class="w-100">
        <b-col cols="12" class="text-center">
          <h1 class="mytext">{{ error.statusCode }}</h1>
          <h1 class="mytext2">
            {{
              `${
                error.statusCode === 404
                  ? `Page not found`
                  : error.statusCode === 403
                  ? error.message
                  : error.message
              }`
            }}
          </h1>
          <b-button
            variant="link"
            class="mytext3 text-decoration-none"
            @click="goTo"
          >
            Go to Homepage
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "full",
  methods: {
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

<style scoped lang="scss">
.mytext {
  margin-top: 150px;
  font-size: 100px;
  text-transform: uppercase;
  color: #12000a;
  font-weight: 300;
  font-family: Audiowide;
  text-shadow: 0px 0px 4px #12000a;
  animation: fadeInText 3s ease-in 1s forwards, flicker4 5s linear 7.5s infinite,
    hueRotate 6s ease-in-out 3s infinite;
}
.mytext2 {
  font-size: 32px;
  text-transform: uppercase;
  color: #12000a;
  font-weight: 300;
  font-family: Audiowide;
  text-shadow: 0px 0px 4px #12000a;
  animation: fadeInText 3s ease-in 1s forwards, flicker4 5s linear 7.5s infinite,
    hueRotate 6s ease-in-out 3s infinite;
}
.mytext3 {
  font-size: 16px;
  text-transform: uppercase;
  color: #12000a;
  font-weight: 300;
  font-family: Audiowide;
  text-shadow: 0px 0px 4px #12000a;
  animation: fadeInText 3s ease-in 1s forwards, flicker4 5s linear 7.5s infinite,
    hueRotate 6s ease-in-out 3s infinite;
}
@keyframes fadeInText {
  1% {
    color: #12000a;
    text-shadow: 0px 0px 4px #12000a;
  }
  70% {
    color: #ff005d;
    text-shadow: 0px 0px 14px #ff005d;
  }
  100% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
}
@keyframes flicker4 {
  0% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  30% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  31% {
    color: #12000a;
    text-shadow: 0px 0px 4px #12000a;
  }
  32% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  36% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  37% {
    color: #12000a;
    text-shadow: 0px 0px 4px #12000a;
  }
  41% {
    color: #12000a;
    text-shadow: 0px 0px 4px #12000a;
  }
  42% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  85% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  86% {
    color: #12000a;
    text-shadow: 0px 0px 4px #12000a;
  }
  95% {
    color: #12000a;
    text-shadow: 0px 0px 4px #12000a;
  }
  96% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
  100% {
    color: #ff005d;
    text-shadow: 0px 0px 4px #ff005d;
  }
}
@keyframes hueRotate {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(-120deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
}
.mybg {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  margin: 0px;
  background: radial-gradient(circle, #240015 0%, #12000b 100%);
  overflow: hidden;
}
</style>
