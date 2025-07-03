import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignIn from "./auth/pages/sign_in.jsx";
import SignUp from "./auth/pages/sign_up.jsx";
import Auth from "./auth/pages/auth.jsx";
import Dashboard from "./dashboard/dashboard.jsx";
import { AppRouter } from "./router/app.router.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
