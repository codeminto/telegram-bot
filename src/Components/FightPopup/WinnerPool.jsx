import React from 'react';

const WinnerPool = ({ no , name }) => {
  return (
    <div className="flex items-center justify-start w-full px-4 text-[#974C13] bg-[#F7D097] border-2 border-[#E9C592] rounded-md">
    <p className="font-semibold text-lg text-left w-full">{no}. {name}</p>
</div>
  );
};

export default WinnerPool;