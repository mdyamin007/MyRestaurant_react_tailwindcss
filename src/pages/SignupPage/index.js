import React, { useState } from "react";
import { handleSignup } from "../../utils/firebase";
import { useNavigate, Navigate } from "react-router-dom";

const SignupPage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (name.length <= 0 || email.length <= 0) {
      setError("Please enter your name & email");
      return;
    }
    if (password.length < 6) {
      setError("Password should be atleast 6 characters long!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    await setLoading(true);
    await handleSignup(name, email, password, setError);
    await setLoading(false);
    if (error) return;
    else navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-semibold">Sign up</h1>
          {error && (
            <div className="bg-red-500 text-white p-2 mb-4">{error}</div>
          )}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full disabled:bg-gray-300 text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            onClick={handleSubmit}
            disabled={loading}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-800 mt-4">
            By signing up, you agree to the &nbsp;
            <a
              className="no-underline border-b border-gray-900 text-gray-900"
              href="#"
            >
              Terms of Service &nbsp;
            </a>
            and
            <a
              className="no-underline border-b border-gray-900 text-gray-900"
              href="#"
            >
              &nbsp;Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-gray-800 mt-6">
          Already have an account?&nbsp;
          <a
            className="no-underline border-b border-blue-500 text-blue-500"
            href="/login"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
