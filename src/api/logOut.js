import toast from "react-hot-toast";

export const logOut = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  toast.success(`You have loged out`);
}