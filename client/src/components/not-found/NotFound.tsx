import { Link } from "react-router-dom";
import styles from "./not-found.module.scss";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <p>Sorry we are unable to locate this page!</p>
      <Link className="button" to="/">
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
