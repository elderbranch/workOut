import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LogInModal from "./Components/Auth/LogInModal.jsx";
import AuthModal from "./Components/Auth/AuthModal.jsx";
import AuthProvider from "./context/authContext.jsx";

import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import Profile from "./Components/Profile/Profile.jsx";

import { Toaster } from "react-hot-toast";
import MainPage from "./Components/pages/MainPage.jsx";


function App() {
  return (
    <div className="app">
      <Toaster position="top-right"  toastOptions={{
    duration: 4000
    }} />
        <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/auth" element={<AuthModal />}></Route>
            <Route path="/login" element={<LogInModal />}></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
      </AuthProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
