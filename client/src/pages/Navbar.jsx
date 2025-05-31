import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Simple check for login status (customize as needed)
  const isLoggedIn = document.cookie.includes("token=");

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <h1 className="text-white">Hello!</h1>
      <div className="flex gap-2">
        {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={handleSignup}>Signup</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;