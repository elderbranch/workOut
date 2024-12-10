import { createContext, useContext, useEffect, useState } from "react";
import { instance } from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/profile");
    }
  }, [navigate]);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const isValid = checkTokenValidity(token);
  //     if (!isValid) {
  //       localStorage.removeItem("token");
  //       sessionStorage.removeItem("token");
  //     } else {
  //       navigate("/login");
  //     }
  //   }
  // }, [navigate]);
  

  const registerUser = async () => {
    setIsLoading(true);
    try {
      const result = await instance.post("/auth/register", userData);
      setToken(result.data.token);

      const storage = isRememberMeChecked ? localStorage : sessionStorage;
      storage.setItem("token", result.data.token);

      toast.success(`Registration successful: ${result.data.message || "Success!"}`);
      
      navigate("/profile");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred!";
      toast.error(`Registration failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const authUser = async () => {
    setIsLoading(true);
    try {
      const result = await instance.post("/auth/login", userData);
      setToken(result.data.token);

      const storage = isRememberMeChecked ? localStorage : sessionStorage;
      storage.setItem("token", result.data.token);

      toast.success(`Login successful: ${result.data.message || "Success!"}`);
      
      navigate("/profile");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred!";
      toast.error(`Login failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserData = (newUserData) => {
    setUserData((prev) => ({ ...prev, ...newUserData }));
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        token,
        updateUserData,
        registerUser,
        authUser,
        isRememberMeChecked,
        setIsRememberMeChecked,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
