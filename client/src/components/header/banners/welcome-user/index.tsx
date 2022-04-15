import { useAuthContext } from "../../../../shared/hooks/useAuthContext";
import styles from "./welcome-user.module.scss";
const WelcomeUser = () => {
  const { user, isLoggedIn, logout } = useAuthContext();
  if (isLoggedIn) {
    return (
      <ul>
        {user && <li>Welcome {user?.name}</li>}
        <li>
          <span className={styles.logout} onClick={logout}>
            Signout
          </span>
        </li>
      </ul>
    );
  }
  return null;
};

export default WelcomeUser;
