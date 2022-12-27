import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import UserProfile from "./pages/auth/UserProfile";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="forgot-password" element={<SendPasswordResetEmail/>} />
          <Route path="password-reset" element={<ResetPassword/>} />
          <Route path="change-password" element={<ChangePassword/>} />
          <Route path="user-profile" element={<UserProfile/>} />
        </Route>
        <Route path="*" element={<h1>Error 404 Page not found!!</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
