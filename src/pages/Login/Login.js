import React from "react";
import TextField from "../../components/TextField"
import Button from "../../components/Button/Button";
import useLogin from "./hooks/useLogin";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

function Login() {
  const { handleLogin, dispatch, state } = useLogin();
  return (
    <main className={styles.main}>
      <section className={styles["section-two"]}>
        <p>Hi Welcome Back! Sign in</p>
        <TextField
          name="email"
          label="Email"
          value={state.email}
          onChange={({ target }) => dispatch({ email: target.value })}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          value={state.password}
          onChange={({ target }) => dispatch({ password: target.value })}
        />
        <div className={styles["btn-div"]}>
          <Button
            custom
            name="Login"
            bgColor="red-bg"
            createFnc={handleLogin}
            isLoading={state.isLoading}
          />
        </div>
        <div>
            <p>Don't have an account? <span><Link to="/register">Register</Link></span></p>
        </div>
      </section>
    </main>
  );
}

export default Login;
