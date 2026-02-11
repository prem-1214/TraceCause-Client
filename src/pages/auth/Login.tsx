import React, { useState } from "react";
import { Link } from "react-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            className="rounded-md border border-white p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-md border border-white p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-md border border-white p-2 hover:bg-white hover:text-black"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-blue-500 underline">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
