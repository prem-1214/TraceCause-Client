import React, { useState } from "react";
import { Link } from "react-router";

import Navbar from "@components/ui/Navbar";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement login logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <LogIn className="text-primary" size={32} />
                </div>
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-sm text-foreground/60">Sign in to your account to continue</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Login form">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-foreground/40"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-border bg-background py-2.5 pr-4 pl-10 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    required
                    aria-required="true"
                    aria-describedby="email-hint"
                    autoComplete="email"
                  />
                </div>
                <p id="email-hint" className="sr-only">
                  Enter your email address
                </p>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-foreground/40"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-border bg-background py-2.5 pr-12 pl-10 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    required
                    aria-required="true"
                    aria-describedby="password-hint"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={0}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p id="password-hint" className="sr-only">
                  Enter your password
                </p>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                  aria-label="Reset your password"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-primary px-4 py-2.5 font-medium text-card transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Sign in to your account"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-card border-t-transparent" />
                    Signing in...
                  </span>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-border"></div>
              <span className="px-4 text-xs text-foreground/40">OR</span>
              <div className="flex-1 border-t border-border"></div>
            </div>

            {/* Register Link */}
            <p className="text-center text-sm text-foreground/60">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:underline"
                aria-label="Create a new account"
              >
                Create account
              </Link>
            </p>
          </div>

          {/* Footer Note */}
          <p className="mt-6 text-center text-xs text-foreground/40">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-foreground/60">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline hover:text-foreground/60">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
