import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userImg from "../../assets/images/profile/user.jpg";
import UserDropdownCard from "./UserDropdownCard";
import { User, Cable, Settings, LogOut, LogIn } from "lucide-react";

const UserDropdown = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        if (!storedToken) return;

        setToken(storedToken); // Set token in state

        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/users/current`,
          {
            headers: { Authorization: `Bearer ${storedToken}` },
          }
        );

        setUser(res.data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, []);

  const logoutClick = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    window.location.reload();
  };

  return (
    <div className="bg-secondary-100 w-60 font-display rounded-2xl p-3 text-background">
      <div>
        {token? (  <div className="flex items-center gap-5 p-2">
          <img src={userImg} alt="user" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <h2 className="text-[12px] font-bold">
              {user?.name || "Loading..."}
            </h2>
            <p className="text-[12px]">{user?.email || "Loading..."}</p>
          </div>
        </div>) : (<div></div>)}
      
      </div>

      <div>
        {token ? (
          <div>
            <UserDropdownCard icon={<User size={20} />} title="Profile" />
            <UserDropdownCard icon={<Cable size={20} />} title="API Keys" />
            <UserDropdownCard icon={<Settings size={20} />} title="Settings" />
            <UserDropdownCard
              icon={<LogOut size={20} />}
              title="Logout"
              onClick={logoutClick}
            />
          </div>
        ) : (
          <UserDropdownCard
            icon={<LogIn size={20} />}
            title="Signup"
            onClick={() => navigate("/signup")}
          />
        )}
      </div>
    </div>
  );
};

export default UserDropdown;
