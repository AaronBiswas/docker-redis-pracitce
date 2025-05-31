import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const [formdata, setFormdata] = useState({
    fullname: "",
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

  const onSignup = async (e) => {
    e.preventDefault();
    try {
      let url = `${import.meta.env.VITE_API}practice/user/signup`;
      const response = await axios.post(url, formdata, { withCredentials: true });
      if (response.status === 201) {
        toast.success("User created successfully");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Signup failed");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <form
        onSubmit={onSignup}
        className="bg-base-200 border border-base-300 shadow-xl p-8 rounded-2xl w-full max-w-md transition-all duration-300"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center text-white tracking-tight">
          Create Your Account
        </h2>
        <div className="flex flex-col gap-6">
          <div>
            <label className="label mb-1">
              <span className="label-text text-base text-gray-200">Full Name</span>
            </label>
            <Input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={formdata.fullname}
              onChange={handleChange}
              required
              className="input input-bordered w-full bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
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
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;