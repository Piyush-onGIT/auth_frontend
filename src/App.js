import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import UserProfile from "./pages/auth/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="login" element={!access_token ?<Login/>:<Navigate to="/user-profile"/>} />
          <Route path="register" element={!access_token?<Register/>:<Navigate to="/user-profile"/>} />
          <Route path="forgot-password" element={<SendPasswordResetEmail/>} />
          <Route path="api/user/reset-password/:id/:token" element={<ResetPassword/>} />
          <Route path="change-password" element={access_token?<ChangePassword/>:<Navigate to="/login"/>} />
          <Route path="user-profile" element={access_token?<UserProfile/>:<Navigate to="/login"/>} />
        </Route>
        <Route path="*" element={<h1>Error 404 Page not found!!</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
