import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const UserAuth = () => {
  return (
    <div className="user-section">
      <NotificationsNoneOutlinedIcon fontSize="large" />
      <AccountCircleIcon fontSize="large" />
    </div>
  );
};

export default UserAuth;
