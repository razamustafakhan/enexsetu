"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import useAuth from "@/store/contexts/auth.context";

const Login = () => {
  const { state, handleLoginChange, handleLoginSubmit } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-10">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-5rem)]">
        {/* LEFT SIDE */}
        <section className="relative hidden w-1/2 overflow-hidden bg-blue-700 lg:flex">
          {/* Background decoration */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/40" />
          <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-blue-800/50" />

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
                Welcome
                <br />
                <span className="text-blue-200">back.</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-blue-100">
                Access your services, applications, documents and appointments
                from one secure platform.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-100">
                    Manage your applications
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-100">
                    Track your service requests
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm text-white">
                    ✓
                  </div>

                  <span className="text-sm text-blue-100">
                    Get doorstep assistance
                  </span>
                </div>
              </div>
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
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Log in to continue to your SevaNex account.
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

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>

                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={state.loginObj.email}
                  onChange={handleLoginChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    value={state.loginObj.password}
                    onChange={handleLoginChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-16 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />

                <label
                  htmlFor="rememberMe"
                  className="ml-3 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create an account
              </Link>
            </p>

            {/* Security */}
            <p className="mt-6 text-center text-xs text-gray-400">
              Your account and information are securely protected by SevaNex.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
