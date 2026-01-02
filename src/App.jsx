import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/add" element={<AddTask />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
