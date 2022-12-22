import React, { useState } from "react";
//import { Menu } from "./Menu";

const Login = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    password: "",
    apellido: "",
  });

  function handleChange(e) {
    const aux = { ...usuario };
    aux[e.target.name] = e.target.value;
    setUsuario(aux);
  }

  return (
    <div className="container">
      <form>
        <div>
          <h1>LOGIN</h1>
          <label htmlFor="txtusu">
            <strong>Username</strong>
          </label>
          <input
            type="text"
            id="txtusu"
            name="nombre"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="txtpas">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            id="txtpas"
            name="password"
            style={{ textAlign: "center" }}
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="button"
          className="btn btn-danger"
          value="Login"
          onClick={(e) => console.log(usuario)}
        />
      </form>
    </div>
  );
};
export default Login;
