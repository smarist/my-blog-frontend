import { useReducer } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
// import { paths } from "../../../../Routes/path";
// import authServices from "../../../../Services/auth.service";

function useRegister() {
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();
  const initState = {
    email: "",
    password: "",
    isLoading: false,
  };

  const [state, dispatch] = useReducer(
    (userState, value) => ({ ...userState, ...value }),
    initState
  );
  const handleLogin = useCallback(
    (event) => {
      event.preventDefault();
      if (!state.email) {
        // toast.error("Email is required");
        return;
      }
      if (!state.password) {
        // toast.error("Password is required");
        return;
      }
      dispatch({ isLoading: true });
      // authServices
      //   .login({
      //       email: state.email,
      //       password: state.password,
      //   })
      //   .then((response) => {
      //     const { token } = response.data.auth; 
      //     localStorage.setItem("token", token);
      //     toast.success("Login was succesful");
      //     navigate(paths.dashboard);
      //   })
      //   .catch((err) => {
      //     dispatch({ isLoading: false });
      //     if (err.response.status === 401) {
      //       toast.error(err?.response?.data?.message)
      //     } else {
      //       toast.error(err.message);
      //     }
      //   });
    },
    [state, navigate]
  );

  return {
    handleLogin,
    state,
    dispatch,
  };
}

export default useRegister;
