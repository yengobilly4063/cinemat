import { useEffect } from "react";
import { Link } from "react-router-dom";
import useRegisterUser from "../shared/hooks/useRegisterLoginUser";

const LoginUser = () => {
  const { handleLoginFormSubmit, handleInputChange, errors, submitError, setPage } = useRegisterUser();

  useEffect(() => {
    setPage("login");
  }, []);

  return (
    <div className="centre-wrapper">
      <form onSubmit={handleLoginFormSubmit} className="form">
        <h1>Signin</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username..."
            id="username"
            className="form-control"
            onChange={handleInputChange}
          />
          {errors && <span className="form-error">{errors?.username}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            id="password"
            className="form-control"
            onChange={handleInputChange}
          />
          {errors && <span className="form-error">{errors?.password}</span>}
        </div>
        <div className="form-group">{submitError && <span className="form-error">{submitError}</span>}</div>
        <div className="form-action">
          <button type="submit">Signin</button>
        </div>
        <div className="form-group">
          <div className="login-register">
            <span>Don't have an account?</span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
