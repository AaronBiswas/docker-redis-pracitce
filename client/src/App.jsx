import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import Navbar from "./pages/Navbar.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex items-center justify-center h-screen gap-4 bg-gray-900">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl text-white">Todo App</h1>
            <Input className="w-max" type="text" placeholder="Enter Todo" />
            <Button className="mt-4 border-rounded bg-gray-600">
              Add Todo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
