import { Link } from "react-router-dom";
import "../shared/styles/form.scss";
import useRegisterUser from "../shared/hooks/useRegisterLoginUser";

const RegisterUser = () => {
  const { handleRegisterFormSubmit, handleInputChange, errors, submitError } = useRegisterUser();

  return (
    <div className="centre-wrapper">
      <form onSubmit={handleRegisterFormSubmit} className="form">
        <h1>Register</h1>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            id="name"
            className="form-control"
            onChange={handleInputChange}
          />
          {errors && <span className="form-error">{errors?.name}</span>}
        </div>
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
          <button type="submit">Register</button>
        </div>
        <div className="form-group">
          <div className="login-register">
            <span>Have an account?</span>
            <Link to="/login">Signin</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
