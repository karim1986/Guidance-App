import LoginForm from "../pages/loginForm/LoginForm";
import Register from "../pages/register/Register";
import PasswordReset from "../pages/resetPassword/PasswordReset";
import PrivateHome from "../pages/privateHome/PrivateHome";
import NewcomerHome from "../pages/newcomerHome/NewcomerHome";
import NotFound from "../pages/notFound/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/newcomer-home" element={<NewcomerHome />} />
        <Route path="/privat-home" element={<PrivateHome />} />
        <Route path="/reset" element={<PasswordReset />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
