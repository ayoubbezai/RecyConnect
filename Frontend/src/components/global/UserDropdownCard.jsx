import React from "react";

const UserDropdownCard = ({ icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-5 p-2 curser-pointer hover:bg-secondary-200 cursor-pointer">
      {icon}
      <h3>{title}</h3>
    </div>
  );
};

export default UserDropdownCard;
