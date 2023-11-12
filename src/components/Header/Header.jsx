import React from "react";

import "./Header.scss";

import siteLogo from "../../assets/logo_site.jpg";
import userIcon from "../../assets/avatar_user.svg";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_row">
        <div className="img_logo_wrapper">
          <img src={siteLogo} alt="#siteLogo" className="img_logo"/>
        </div>
        <div className="header_title_wrapper">
          <h2 className="header_title_">Библиотека</h2>
        </div>
        <div className="user_info_wrapper">
          <div className="user_info_text_wrapper">
            <span className="user_name">Привет, Иван!</span>
          </div>
          <div className="img_user_wrapper">
            <img src={userIcon} alt="#userIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
