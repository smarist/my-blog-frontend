import React from "react";
import TextField from "../../components/TextField"
import Button from "../../components/Button/Button";
import useRegister from "./hooks/useRegister";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";

function Register() {
  const { handleLogin, dispatch, state } = useRegister();
  return (
    <main className={styles.main}>
      <section className={styles["section-two"]}>
        <p>Let's get you signed up!</p>
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
            <p>Already a user? <span><Link to="/login">Log in</Link></span></p>
        </div>
      </section>
    </main>
  );
}

export default Register;
