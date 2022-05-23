import LoginForm from "../pages/loginForm/LoginForm";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
// import NewcomerHome from "../pages/newcomerHome/NewcomerHome";
// import PrivateHome from "../pages/privateHome/PrivateHome";
import PasswordReset from "../pages/resetPassword/PasswordReset";
import Modal from "./eventModal/Modal";
import NotFound from "../pages/notFound/NotFound";
import Messenger from "../pages/messenger/Messenger";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/users" element={<Dashboard />} />

        {/* <Route path="/newcomer" element={<NewcomerHome />} />
        <Route path="/privat" element={<PrivateHome />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
