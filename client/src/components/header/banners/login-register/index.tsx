import { Link } from "react-router-dom";
import styles from "./login-register.module.scss";

const LoginRegister = () => {
  return (
    <ul className={styles.wrapper}>
      <li>
        <Link to="/login">SignIn</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};

export default LoginRegister;
