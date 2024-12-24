import { useNavigate } from "react-router-dom";
import { registerUserOrAuthUser } from "../../api/auth";
import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const AuthModal = () => {
  const navigate = useNavigate();
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    console.log(isRememberMeChecked);
    setIsRememberMeChecked(event.target.checked);
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const updateUserData = (newUserData) => {
    setUserData((prev) => ({ ...prev, ...newUserData }));
  };

  return (
    <div className="w-[100vw] mt-[60px]">
      <div className="m-auto min-[450px]:w-[400px] md:w-[672px] shadow-xl rounded-3xl flex min-h-full flex-col justify-center px-8  bg-white">
        <div className="text-h1 sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Вход в аккаунт</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full mb-10">
          <form className="space-y-4" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Почта</label>
              <div className="mt-2">
                <Input onChange={(e) => updateUserData({ email: e.target.value })} value={userData.email}  type="email" required={true} placeholder="Введите вашу почту"/>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Пароль</label>
              </div>
              <div className="mt-2">
                <Input onChange={(e) => updateUserData({ password: e.target.value })} value={userData.password}  type="password" required={true} placeholder="Введите ваш пароль"/>
              </div>
            </div>
            <div>
              <div className="w-40 mx-auto mt-5"><input type="checkbox" id="checkbox1" onChange={handleCheckboxChange} checked={isRememberMeChecked}  className="mr-1"/><label htmlFor="checkbox1">Запомнить меня</label></div>
            </div>
            <div>
              <Button func={() => registerUserOrAuthUser('login', userData, isRememberMeChecked)} text="Войти в аккаунт"/>
            </div>
          </form>
          <p className="mt-4 text-center text-sm/6 text-gray-500">
            Нету аккаунта?
            <a onClick={() => {
              navigate("/login")
            }} className="font-semibold  text-indigo-600 hover:text-indigo-500">Создать</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthModal