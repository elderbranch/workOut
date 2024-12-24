import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LogInModal from "./Components/Auth/LogInModal.jsx";
import AuthModal from "./Components/Auth/AuthModal.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/pages/MainPage.jsx";
import Worksouts from "./Components/pages/WorksoutPage.jsx";
import AddNewWorkOutPage from "./Components/pages/AddNewWorkOutPage.jsx";
import ProtectedRouteWrapper from "./Components/ProtectedRouteWrapper.jsx";
import AddNewExersizePage from "./Components/pages/AddNewExersizePage.jsx";
import WorkOutBox from "./Components/pages/WorkoutDetails.jsx";


function App() {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 overflow-auto">
      <Toaster position="top-right" toastOptions={{
        duration: 3000
      }} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthModal />} />
          <Route path="/login" element={<LogInModal />} />
          <Route
            path="/work"
            element={<ProtectedRouteWrapper element={<AddNewExersizePage />} />}
          />
          <Route
            path="/AddNewWorkOut"
            element={<ProtectedRouteWrapper element={<AddNewWorkOutPage />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRouteWrapper element={<Profile />} />}
          />
          <Route
            path="/workouts"
            element={<ProtectedRouteWrapper element={<Worksouts />} />}
          />
          <Route
            path="/workoutDetails/:id"
            element={<ProtectedRouteWrapper element={<WorkOutBox />} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
