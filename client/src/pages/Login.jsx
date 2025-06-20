import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = `${import.meta.env.VITE_API}practice/user/login`;
    const response = await axios.post(newUrl, formdata, { withCredentials: true });
    if (response.data.success) {
      toast.success("User registered successfully");
      navigate("/");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <form
        onSubmit={onLogin}
        className="bg-base-200 border border-base-300 shadow-xl p-8 rounded-2xl w-full max-w-md transition-all duration-300"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center text-white tracking-tight">
          Login to Your Account
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <label className="label mb-1">
              <span className="label-text text-base text-gray-200">Email</span>
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formdata.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="label mb-1">
              <span className="label-text text-base text-gray-200">Password</span>
            </label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formdata.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <Button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;