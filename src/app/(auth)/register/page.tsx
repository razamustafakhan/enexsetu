"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import useAuth from "@/store/contexts/auth.context";

const Register = () => {
  const { state, handleRegisterChange, handleRegisterSubmit } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Next step:
    // await register(formData);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-10">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-5rem)]">
        {/* LEFT SIDE */}
        <section className="relative hidden w-1/2 overflow-hidden bg-blue-700 lg:flex">
          {/* Background decoration */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/40" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-800/50" />

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14">
            {/* Logo */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                SevaNex
              </h1>

              <p className="mt-2 text-sm text-blue-100">
                Digital services. Simplified.
              </p>
            </div>

            {/* Main content */}
            <div className="max-w-md">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur">
                ✦
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Your services,
                <br />
                <span className="text-blue-200">delivered simply.</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-blue-100">
                Access essential digital services, submit applications, manage
                documents and get doorstep assistance through SevaNex.
              </p>
            </div>

            {/* Bottom */}
            <div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Secure digital service platform
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex w-full items-center justify-center px-5 py-8 sm:px-10 lg:w-1/2 lg:px-12 xl:px-16">
          <div className="w-full max-w-xl">
            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <h1 className="text-3xl font-bold text-blue-600">SevaNex</h1>

              <p className="mt-1 text-sm text-gray-500">
                Digital services. Simplified.
              </p>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Join SevaNex and access digital services from anywhere.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleRegisterSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    User Name
                  </label>

                  <input
                    name="userName"
                    type="text"
                    // autoComplete="name"
                    value={state.registerObj.userName}
                    onChange={handleRegisterChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    // autoComplete="email"
                    value={state.registerObj.email}
                    onChange={handleRegisterChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Phone */}
              {/* <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Mobile number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div> */}

              {/* Password + Confirm */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      // autoComplete="new-password"
                      value={state.registerObj.password}
                      onChange={handleRegisterChange}
                      placeholder="Minimum 8 characters"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Confirm password
                  </label>

                  {/* <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Repeat password"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-16 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div> */}
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-5 text-gray-600"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Log in
              </Link>
            </p>

            {/* Security message */}
            <p className="mt-6 text-center text-xs text-gray-400">
              Your information is securely handled by SevaNex.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
