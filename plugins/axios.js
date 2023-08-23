export default function({ $axios, redirect }) {

  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      redirect(`/login`);
    }
  });
}
