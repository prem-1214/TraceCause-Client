import React, { useState } from "react";
import { Link } from "react-router";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Register</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-white p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-white p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-white p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-white p-2 text-black">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-500 underline">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
