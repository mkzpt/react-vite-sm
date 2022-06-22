import React, { useEffect } from "react";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const { global, login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    let form = event.currentTarget;
    let u = form.elements["username"].value;
    console.log(u);

    login(u);
    navigate("/home", { replace: true });
  };

  useEffect(() => {
    let isAuth = global.username ? true : false;

    if (isAuth) {
      navigate("/home", { replace: true });
    }
  }, []);

  return (
    <div className="login_container">
      <div className="login">
        <h1 className="text-center">Bienvenido</h1>

        <form className="" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Usuario</label>
            <input
              className="form-control"
              type="text"
              name="username"
			  maxLength={10}
              required
            />
          </div>
          <input
            className="btn btn-success w-100"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
