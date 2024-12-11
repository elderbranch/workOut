import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/App.css';
import LogInModal from "./Components/Auth/LogInModal.jsx";
import AuthModal from "./Components/Auth/AuthModal.jsx";

import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Profile from "./Components/Profile/Profile.jsx";

import { Toaster } from "react-hot-toast";
import MainPage from "./Components/pages/MainPage.jsx";
import Header from "./Components/Header/Header.jsx";
import { useEffect } from "react";
import { logInByToken } from "./api/logInByToken.js";
import useUserStore from "./Components/ZustandStore.jsx";


function App() {
  const { setUser,} = useUserStore();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await logInByToken();
        console.log(userData);
        setUser(userData); 
      } catch (error) {
        console.error("Failed to fetch user data by token:", error);
      }
    };

    fetchUserData(); 
  }, [setUser]);

  return (
    <>
      <Toaster position="top-right" toastOptions={{
        duration: 4000
      }} />
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/login" element={<LogInModal />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
