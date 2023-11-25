import "./App.css";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./views/login/login";
import Sidebar from "./components/sidebar2/sidebar";
import Viewsection from "./views/viewInsection/ViewInsection";
import Homepage from "./views/hompage/homepage";
import Viewproject from "./views/viewInproject/ViewInproject";
import PageIntroduce from "./views/Overview/pages/PageIntroduce";
import Login2 from "./views/login2/pages/Login";
import Viewgoal from "./views/goal/viewIngoal";
import ProfilePage from "./views/profile/viewInprofile";
import { toast, ToastContainer } from "react-toastify";
import { useContext, useEffect } from "react";
import { Usercontext } from "./api/usercontext";
function App() {
  const { user, loginContext } = useContext(Usercontext);
  // refresh lai se duy tri trang thai dang nhap
  useEffect(() => {
    if (localStorage.getItem("token")) {
      loginContext(
        localStorage.getItem("email"),
        localStorage.getItem("token")
      );
    }
  });
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<PageIntroduce />} />
          <Route path="/Login2" element={<Login2 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Overview" element={<Homepage />} />
          <Route path="/home" element={<Sidebar />} />
          <Route path="/goal" element={<Viewgoal />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/project_1" exact element={<Viewproject />} />
          <Route path="/project_2" exact element={<Viewproject />} />
          <Route path="/project_1/section_1" exact element={<Viewsection />} />
          <Route path="/project_1/section_2" exact element={<Viewsection />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
}

export default App;
