import { useAuthContext } from "../../shared/hooks/useAuthContext";
import LoginRegister from "./banners/login-register";
import WelcomeUser from "./banners/welcome-user";
import styles from "./header.module.scss";
const Header = () => {
  const { isLoggedIn } = useAuthContext();

  return (
    <header className={styles.wrapper}>
      {isLoggedIn && <WelcomeUser />}
      {!isLoggedIn && <LoginRegister />}
    </header>
  );
};

export default Header;
