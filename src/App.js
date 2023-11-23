import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./views/login/login";
import Sidebar from "./components/sidebar2/sidebar";
import Viewsection from "./views/viewInsection/ViewInsection";
import Homepage from "./views/hompage/homepage";
import Viewproject from "./views/viewInproject/ViewInproject";
import PageIntroduce from "./views/Overview/pages/PageIntroduce";
import Login2 from "./views/login2/pages/Login";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<PageIntroduce />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Overview" element={<Homepage />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/project_1" exact element={<Viewproject />} />
          <Route path="/project_2" exact element={<Viewproject />} />
          <Route path="/project_1/section_1" exact element={<Viewsection />} />
          <Route path="/project_1/section_2" exact element={<Viewsection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
