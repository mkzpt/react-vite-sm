import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/global_context";
import AuthLayout from "./components/AuthLayout";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route element={<AuthLayout />}>
              <Route path="/home" element={<HomePage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
