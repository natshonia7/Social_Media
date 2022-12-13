
import React from "react";
import "./online.css";

function Online({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
}

export default Online;
