import React from 'react';

const ProfileButton = ({ icon, text }) => {
  return (
    <button className="flex items-center w-full px-16 py-2 mb-2 bg-[#F7D097] border-2 border-[#D97C00] rounded-lg shadow-md">
      <img src={icon} alt={`${text} icon`} className="w-6 h-6 mr-3" />
      <span className="text-[#974C13] font-semibold text-lg">{text}</span>
    </button>
  );
};

export default ProfileButton;
