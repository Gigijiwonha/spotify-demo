import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import AuthRedirectPage from "./pages/AuthRedirectPage/AuthRedirectPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="auth-redirect" element={<AuthRedirectPage />} />
      </Route>

  

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
