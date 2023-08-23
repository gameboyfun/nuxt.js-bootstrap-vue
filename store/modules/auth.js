const LOGIN = "LOGIN";
const GETME_SUCCESS = "GETME_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGOUT = "LOGOUT";

const deleteAllCookie = function() {
  let cookies = document.cookie.split(";");
  for (let i of cookies) {
    let cookie = cookies[i];
    let eqPos = cookie?.indexOf("=");
    let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
};

const auth = {
  namespaced: true,
  state: {
    loading: false,
    loaded: true,
    isLoggedIn: false,
    user: null
  },
  mutations: {
    [LOGIN](state) {
      state.loading = true;
      state.loaded = false;
    },
    [GETME_SUCCESS](state, payload) {
      state.user = payload;
      state.loaded = true;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [LOGIN_SUCCESS](state, payload) {
      state.user = payload.user;
      state.loaded = true;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [LOGIN_FAILED](state) {
      state.isLoggedIn = false;
      state.loading = false;
      state.loaded = true;
    },
    [LOGOUT](state) {
      state.loading = false;
      state.loaded = true;
      state.isLoggedIn = false;
      state.user = null;
      state.permission = {};
    }
  },
  actions: {
    getMe({ commit }) {
      return this.$axios
        .get("/api/auth/me")
        .then(response => {
          commit(GETME_SUCCESS, response.data);
        })
        .catch(error => {
          const code = parseInt(error.response && error.response.status);
          if (code == 404) {
            window.location = "/login";
          }
        });
    },
    login({ commit }, { email, password }) {
      return this.$axios
        .post("/api/auth/login", {
          email,
          password,
        })
        .then(async response => {
          localStorage.setItem("token", response.data.token);
          await commit(LOGIN_SUCCESS, response.data);
        })
    },
    logout({ commit }) {
      return this.$axios.post("/api/auth/logout").then(() => {
        commit(LOGOUT);
        deleteAllCookie();
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
      });
    }
  }
};

export default auth;
