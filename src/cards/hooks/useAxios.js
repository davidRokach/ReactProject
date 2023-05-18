import axios from "axios";
import { useSnackbar } from "../../provider/SnackbarProvider";

const useAxios = () => {
  const snack = useSnackbar();

  axios.interceptors.request.use((data) => {
    console.log("in useAxios Request Interceptor", data);
    return Promise.resolve(data);
  }, null);

  // axios.interceptors.response.use(
  //   (data) => {
  //     console.log("in useAxios Request Interceptor", data);
  //     return Promise.resolve(data);
  //   },
  //   (error) => {
  //     console.log("in useAxios Response Interceptor", error);
  //     return Promise.reject(error);
  //   }
  // );

  axios.interceptors.response.use(null, (error) => {
    const expectedError = error.response && error.response.status >= 400;
    if (expectedError) snack(error.message, "error");
    return Promise.reject(error);
  });
};
export default useAxios;
