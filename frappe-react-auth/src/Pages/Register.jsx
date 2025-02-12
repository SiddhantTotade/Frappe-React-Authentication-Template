import { useState } from "react";
import { AuthCard } from "../Components/AuthCard";

export const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
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
          onSubmit={() => (userDetails.email, userDetails.password)}
        >
          <input
            name="name"
            placeholder="Name"
            type="text"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            value={userDetails.name}
            required
            onChange={handleChange}
            style={{ padding: "10px", outline: "none" }}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            value={userDetails.email}
            required
            onChange={handleChange}
            style={{ padding: "10px", outline: "none" }}
          />
          <input
            name="password"
            placeholder="Password"
            type={`${showPassword ? "password" : "text"}`}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            value={userDetails.password}
            required
            onChange={handleChange}
            style={{ padding: "10px", outline: "none" }}
          />
          <input
            type="checkbox"
            onClick={() => setShowPassword((showPassword) => !showPassword)}
            style={{ alignSelf: "end", accentColor: "black" }}
          />
          <button
            type="submit"
            style={{
              background: "#000000",
              color: "#ffffff",
              border: 0,
              padding: "10px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </AuthCard>
  );
};
