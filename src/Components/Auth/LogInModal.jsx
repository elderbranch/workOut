

import { useNavigate } from "react-router-dom";
import Spinner from "../UI/Spinner";
import { registerUserOrAuthUser } from "../../api/auth";
import { useState } from "react";

const LogInModal = () => {
  const navigate = useNavigate();

  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    console.log(isRememberMeChecked)
    setIsRememberMeChecked(event.target.checked);
  };


  const [userData, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const updateUserData = (newUserData) => {
    setUserData((prev) => ({ ...prev, ...newUserData }));
  };

  return (
    <div className="w-full min-[450px]:w-[400px] md:w-[672px] shadow-xl rounded-3xl flex min-h-full flex-col justify-center px-8  bg-white">
      <div className="text-h1 sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Регистрация</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full mb-10">
        <form className="space-y-4" method="POST" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">Имя</label>
            <div className="mt-2">
              <input onChange={(e) => updateUserData({ first_name: e.target.value })} value={userData.first_name} type="text" name="firstName" id="firstName" required placeholder="Введите ваше имя" className="block w-full rounded-md bg-inputBg px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-inputBorger placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">Фамилия</label>
            <div className="mt-2">
              <input onChange={(e) => updateUserData({ last_name: e.target.value })} value={userData.last_name} type="text" name="lastName" id="lastName" required placeholder="Введите вашу фамилию" className="block w-full rounded-md bg-inputBg px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-inputBorger placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Почта</label>
            <div className="mt-2">
              <input onChange={(e) => updateUserData({ email: e.target.value })} value={userData.email} type="email" name="email" id="email" required placeholder="Введите вашу почту" className="block w-full rounded-md bg-inputBg px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-inputBorger placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Пароль</label>
            </div>
            <div className="mt-2">
              <input onChange={(e) => updateUserData({ password: e.target.value })} value={userData.password} type="password" name="password" id="password" autoComplete="current-password" required placeholder="Введите ваш пароль" className="block w-full rounded-md bg-inputBg px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-inputBorger placeholder:text-gray-600 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>
          <div>
            <div className="w-40 mx-auto mt-5"><input type="checkbox" onChange={handleCheckboxChange} checked={isRememberMeChecked} id="checkbox1" className="mr-1" /><label htmlFor="checkbox1">Запомнить меня</label></div>
          </div>
          <div>
            <button onClick={() => registerUserOrAuthUser('register', userData, isRememberMeChecked)} type="submit" className="flex w-full justify-center rounded-lg bg-btnColor px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{"Создать аккаунт"}</button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm/6 text-gray-500">
          Есть аккаунт?
          <a onClick={() => {
            navigate('/auth')
          }} className="font-semibold  text-indigo-600 hover:text-indigo-500">Войти</a>
        </p>
      </div>
    </div>
  )
}

export default LogInModal