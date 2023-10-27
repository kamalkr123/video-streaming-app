import React from "react";
import "./ChatMessage.css";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="chat-message">
      <img
        className="chat-user-img"
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="user"
      />
      <span className="chat-username">{name}</span>
      <span className="chat-user-message">{message}</span>
    </div>
  );
};

export default ChatMessage;
