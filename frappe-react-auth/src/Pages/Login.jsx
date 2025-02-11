import { useState } from "react";
import { AuthCard } from "../Components/AuthCard";
import { login } from "../API's/authApi";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShwoPassword] = useState(true);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <AuthCard>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={() => login(credentials.email, credentials.password)}
        >
          <input
            name="email"
            placeholder="Email"
            type="email"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            value={credentials.email}
            required
            onChange={handleChange}
            style={{ padding: "10px", outline: "none" }}
          />
          <input
            name="password"
            placeholder="Password"
            type={`${showPassword ? "password" : "text"}`}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            value={credentials.password}
            required
            onChange={handleChange}
            style={{ padding: "10px", outline: "none" }}
          />
          <input
            type="checkbox"
            onClick={() => setShwoPassword((showPassword) => !showPassword)}
            style={{ alignSelf: "end", accentColor: "black" }}
          />
          <button
            type="submit"
            style={{
              background: "#000000",
              color: "#ffffff",
              outline: "none",
              border: 0,
              padding: "10px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </AuthCard>
  );
};
