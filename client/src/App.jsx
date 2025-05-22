import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import Navbar from "./pages/Navbar.jsx";
import axios from "axios";
import { toast } from "sonner";

function App() {
  const [details, setDetails] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_API}practice/todo/new`;
      const response = await axios.post(url, details);
      if (response.data.success) {
        toast.success("Todo added successfully!");
        setDetails({
          title: "",
          description: "",
        });
      } else {
        toast.error("Error adding todo:", response.data.message);
      }
    } catch (e) {
      toast.error("Error:", e.response.data.message);
    }
    console.log("Form submitted:", details);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center h-screen gap-4 bg-gray-900">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl text-white">Todo App</h1>
            <div className="flex flex-col items-center gap-4">
              <Input
                className="w-max text-white"
                type="text"
                name="title"
                placeholder="Enter Todo"
                value={details.title}
                onChange={handleChange}
              />
              <Textarea
                className="text-white"
                name="description"
                placeholder="Enter the description"
                value={details.description}
                onChange={handleChange}
              />
            </div>
            <Button
              className="mt-4 border-rounded bg-gray-600"
              onClick={handleSubmit}
            >
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
