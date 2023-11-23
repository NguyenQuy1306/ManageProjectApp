import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./views/login/login";
import Sidebar from "./components/sidebar2/sidebar";
import Viewsection from "./views/viewInsection/ViewInsection";
import Homepage from "./views/hompage/homepage";
import Viewproject from "./views/viewInproject/ViewInproject";
import Viewgoal from "./views/viewIngoal/ViewIngoal";
import ProfilePage from "./views/viewProfile/viewProfile";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/goal" element={<Viewgoal />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/project1" exact element={<Viewproject />} />
          <Route path="/project2" exact element={<Viewproject />} />
          <Route path="/project1/section_1" exact element={<Viewsection />} />
          <Route path="/project1/section_2" exact element={<Viewsection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
