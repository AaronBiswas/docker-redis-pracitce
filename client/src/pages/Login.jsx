import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
     const [formdata, setFormdata] = useState({
    email:"",
    password:"",
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
   const {name,value} = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  }

  const onLogin=async(e)=>{
  e.preventDefault();
  let newUrl = `${import.meta.env.VITE_API}practice/user/login`;
  const response= await axios.post(newUrl,formdata);
  if(response.data.success){
    console.log("User registered");
    toast.success("User registered successfully");
    navigate("/")
  }
  else{
    toast.error(response.data.message);
  }
}


  return (
    <div>
      <form
        onSubmit={onLogin}
        className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="card-body gap-2">
            <label className="label">
              <span className="label-text">Email</span>{" "}
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input"
              value={formdata.email}
              onChange={handleChange}
            />
            <label className="label">
              <span className="label-text">Password</span>{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input"
              value={formdata.password}
              onChange={handleChange}
            />
          </div >
        </div>
      </form>
    </div>
  );
};

export default Login;
