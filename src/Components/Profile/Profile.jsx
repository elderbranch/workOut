import { useEffect } from "react";
import useUserStore from "../../stores/profileStore.js";

import IconUser from "../../assets/user.svg";
import fitGuy from "../../assets/fitGuy.jpg";
import thikGuy from "../../assets/thikGuy.png";

import HeaderBottom from "../Header/HeaderBottom.jsx";


const Profile = () => {
  const { user, loginUser } = useUserStore();

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <div className="bg-white w-screen fixed top-[60px] left-0 h-[100vh] overflow-auto">
      <div className="h-[378px] flex justify-center items-center bg-[url('/src/assets/back.png')] bg-no-repeat bg-cover rounded-b-3xl">
        <div className="flex flex-col items-center justify-center gap-y-[26px] text-[#fff] ">
          <div className="flex flex-col justify-center items-center gap-y-[26px]">
            <img className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px]" src={IconUser} alt="" />
            <h3 className="text-[30px] font-bold ">{user.name}</h3>
          </div>
          <div className="flex gap-x-[36px] sm:gap-x-[56px]">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[26px] font-bold">Minutes</h1>
              <p className="text-[26px] font-normal">{user && user.statistics && Array.isArray(user.statistics) ? user.statistics[0]?.value ?? "N/A" : "Error"}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[26px] font-bold">Workouts</h1>
              <p className="text-[26px] font-normal">{user && user.statistics && Array.isArray(user.statistics) ? user.statistics[1]?.value ?? "N/A" : "Error"}</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[26px] font-bold">Kg</h1>
              <p className="text-[26px] font-normal">{user && user.statistics && Array.isArray(user.statistics) ? user.statistics[2]?.value ?? "N/A" : "Error"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col sm:flex-row sm:mb-24 justify-center gap-x-[42px] mt-12 ">
        <div className="flex flex-col items-center justify-center gap-y-[13px]">
          <h2 className="text-[18px] font-normal">Before</h2>
          <img className="rounded-xl" src={thikGuy} alt="not foud" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[13px]">
          <h2 className="text-[18px] font-normal">After</h2>
          <img className="mb-9 rounded-xl sm:mb-0" src={fitGuy} alt="not foud" />
        </div>
      </div>
        <HeaderBottom/>
    </div>
  );
};

export default Profile;
