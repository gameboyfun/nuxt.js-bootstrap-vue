export default function ({ $axios, store, redirect }) {
  if (localStorage.getItem(`token`)) {
    return $axios
      .get("/api/auth/me")
      .then(response => {
        localStorage.setItem("user_id", response.data.id);
        store.commit("auth/GETME_SUCCESS", response.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        redirect("/login");
      });
  } else {
    redirect(`/login`);
  }
}
