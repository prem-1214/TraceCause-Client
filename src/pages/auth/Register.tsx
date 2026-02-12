import React, { useState } from "react";
import { Link } from "react-router";

import Navbar from "@components/ui/Navbar";
import { Check, Eye, EyeOff, Lock, Mail, User, UserPlus, X } from "lucide-react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password strength validation
  const passwordRequirements = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "Contains uppercase letter", test: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", test: /[a-z]/.test(password) },
    { label: "Contains number", test: /\d/.test(password) },
  ];

  const passwordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement registration logic
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
                  <UserPlus className="text-primary" size={32} />
                </div>
              </div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Create Account</h1>
              <p className="text-sm text-foreground/60">Sign up to get started</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Registration form">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-foreground/40"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-border bg-background py-2.5 pr-4 pl-10 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    required
                    aria-required="true"
                    aria-describedby="name-hint"
                    autoComplete="name"
                  />
                </div>
                <p id="name-hint" className="sr-only">
                  Enter your full name
                </p>
              </div>

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
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-border bg-background py-2.5 pr-12 pl-10 text-foreground placeholder:text-foreground/40 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    required
                    aria-required="true"
                    aria-describedby="password-requirements"
                    autoComplete="new-password"
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

                {/* Password Requirements */}
                {password.length > 0 && (
                  <div id="password-requirements" className="mt-2 space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-2 text-xs ${
                          req.test ? "text-success" : "text-foreground/40"
                        }`}
                      >
                        {req.test ? (
                          <Check size={12} aria-label="Requirement met" />
                        ) : (
                          <X size={12} aria-label="Requirement not met" />
                        )}
                        <span>{req.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute top-1/2 left-3 -translate-y-1/2 text-foreground/40"
                    size={18}
                    aria-hidden="true"
                  />
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full rounded-md border py-2.5 pr-12 pl-10 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:outline-none ${
                      confirmPassword.length > 0
                        ? passwordsMatch
                          ? "border-success bg-background focus:border-success focus:ring-success/20"
                          : "border-error bg-background focus:border-error focus:ring-error/20"
                        : "border-border bg-background focus:border-primary focus:ring-primary/20"
                    }`}
                    required
                    aria-required="true"
                    aria-describedby="confirm-password-hint"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-foreground/40 hover:text-foreground"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    tabIndex={0}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {confirmPassword.length > 0 && (
                  <p
                    id="confirm-password-hint"
                    className={`mt-1 text-xs ${passwordsMatch ? "text-success" : "text-error"}`}
                  >
                    {passwordsMatch ? "Passwords match" : "Passwords do not match"}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-md bg-primary px-4 py-2.5 font-medium text-card transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Create your account"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-card border-t-transparent" />
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-border"></div>
              <span className="px-4 text-xs text-foreground/40">OR</span>
              <div className="flex-1 border-t border-border"></div>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-foreground/60">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:underline"
                aria-label="Sign in to your account"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Footer Note */}
          <p className="mt-6 text-center text-xs text-foreground/40">
            By creating an account, you agree to our{" "}
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

export default Register;
