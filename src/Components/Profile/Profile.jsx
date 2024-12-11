import { useEffect } from "react";
import useUserStore from "../ZustandStore";
import { logInByToken } from "../../api/logInByToken";

const Profile = () => {
  const { user } = useUserStore();

  return (
    <div className="fixed top-0 left-2/4 -translate-x-2/4 mt-[60px] bg-profile-back">
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Created At: {user.createdAt}</p>
          <h2>Statistics:</h2>
          <ul>
            {user.statistics.map((stat, index) => (
              <li key={index}>
                {stat.label}: {stat.value}
              </li>
            ))}
          </ul>
          <button>Update Statistics</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile
