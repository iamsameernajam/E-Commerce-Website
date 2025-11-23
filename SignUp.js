import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", email);
    navigate("/");
  };

  return (
    <div style={{ width: "300px", margin: "60px auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          required
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
          }}
        >
          Signup
        </button>

      </form>

      <p style={{ marginTop: "10px" }}>
        Already have an account?
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          {" "}
          Login
        </span>
      </p>
    </div>
  );
};

export default Signup;
