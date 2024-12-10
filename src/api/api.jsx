import axios from "axios"

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
})


export const registerUserOrLOgIn = async ({where}) => {
  try {
    const result = await instance.post(`/auth/${where}`, userData);
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