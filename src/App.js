import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Layout from "./components/pages/Layout";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import ChangePassword from "./components/pages/auth/ChangePassword";
import UserProfile from "./components/pages/auth/UserProfile";

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
