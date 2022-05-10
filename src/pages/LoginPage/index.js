import { FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import React from "react";
import logo from "../../assets/loginAvatar.svg";
import { useState } from "react";
import { handleLogin } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    await event.preventDefault();
    await setLoading(true);
    await handleLogin(email, password, setError);
    await setLoading(false);
    if (error) return;
    else await navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {error && (
        <div className="bg-red-600 rounded-lg p-4 text-white font-base">
          {error}
        </div>
      )}
      <form
        className="w-full md:w-1/3 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex font-bold justify-center mt-6">
          <img className="h-20 w-20" src={logo} alt="Logo" />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">Login</h2>
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <MdAlternateEmail className="ml-3 fill-current h-3 w-3 text-gray-400 text-xs z-10" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                autoComplete="true"
                onChange={(e) => setEmail(e.target.value)}
                className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <FaLock className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="true"
                onChange={(e) => setPassword(e.target.value)}
                className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full disabled:bg-gray-100 py-2 mt-4 rounded-full bg-green-600 text-gray-100  focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
