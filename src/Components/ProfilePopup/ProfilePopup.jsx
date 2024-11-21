import React from 'react';
import ProfileButton from './ProfileButton';
import popupImage from '../../images/popup.svg';
import iconClose from '../../images/icon_close.svg';

import icon_1 from '../../images/icon_1.svg';
import icon_2 from '../../images/icon_2.svg';
import icon_3 from '../../images/icon_3.svg';
import icon_4 from '../../images/icon_4.svg';
import icon_5 from '../../images/icon_5.svg';

const ProfilePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if the popup is not open

  // Array of button data
  const buttons = [
    { icon: icon_1, text: "Wallet" },
    { icon: icon_2, text: "Details" },
    { icon: icon_3, text: "Withdrawal" },
    { icon: icon_4, text: "Deposit" },
    { icon: icon_5, text: "Setting" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="relative w-full max-w-xs">
        {/* Close Icon */}

        <button
          onClick={onClose}
          className="absolute top-6 right-4 w-4 h-4 cursor-pointer z-10"
        >
          <img src={iconClose} alt="Close Icon" />
        </button>


        {/* Popup Image as Background */}
        <img src={popupImage} alt="Popup Background" className="w-full h-auto" />

        {/* Profile Content on Top of the Popup Image */}
        <div className="absolute inset-0 flex flex-col items-center py-2 px-6">
          {/* Profile Header */}
          <h2 className="text-[#FFFFFF] text-2xl font-bold mb-10">Profile</h2>

          {/* Profile Buttons */}
          <div className="flex flex-col space-y-5 w-full">
            {buttons.map((button, index) => (
              <ProfileButton key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
