import React, { useState } from 'react';
import ProfilePic from '../../img/profile_pic.png'; // Assuming you have a Profile component
import Profile from '../Modules/Profile.js';

const Top = ({ handleContainerClick }) => {
  const [isPersonDetailsVisible, setPersonDetailsVisible] = useState(false);

  const handleClick = () => {
    setPersonDetailsVisible(true);
    handleContainerClick(true)
  };
  const hanedleGoBack = () => {
    setPersonDetailsVisible(false);
    handleContainerClick(false)
  }

  return (
    <div className="top d-flex justify-content-end">
      <div className="profile" onClick={handleClick}>
        <img src={ProfilePic} alt="" height="50px" />
      </div>
      {isPersonDetailsVisible && (
        <Profile handleContainerClick={handleContainerClick} handleGoBack={hanedleGoBack} />
      )}
    </div>
  );
};

export default Top;
