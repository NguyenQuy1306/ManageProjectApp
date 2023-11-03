import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./views/login/login";
import Calendarr from "./components/calendar/calendar";
import Sidebar from "./components/sidebar2/sidebar";
// import Calendarr from "../src/components/calendar/calendar";
import Homepage from "./views/hompage/homepage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/home" element={<Sidebar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
