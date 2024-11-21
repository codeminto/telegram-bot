import React from 'react';
import popupImage from '../../images/popup.svg';
import iconClose from '../../images/icon_close.svg';
import WinnerPool from './WinnerPool';
import line from '../../images/line.svg';
import button from '../../images/button.svg';


const FightPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if the popup is not open

    const winner = [
        { no: 1, name: "balaly" },
        { no: 2, name: "helenn" },
        { no: 3, name: "phi nobid" },
        { no: 4, name: "drake123" },
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
                    <h2 className="text-[#FFFFFF] text-2xl font-bold mb-10">Fight</h2>
                    <div className='flex gap-2 flex-col'>
                        <button className="flex items-center justify-start w-full px-16 text-[#974C13] bg-[#EAD1B3] rounded-md ">
                            <span className=" font-semibold text-lg">Winners Pool</span>
                        </button>
                        <div className="flex flex-col space-y-1 w-full mb-1 text-left">
                            {winner.map((winner, index) => (
                                <WinnerPool key={index} no={winner.no} name={winner.name} />
                            ))}
                        </div>
                        <img src={line} alt="dshed line" />

                        <div className='bg-[#F8E8C9] text-[#974C13] text-xl font-extrabold p-4 flex flex-col rounded-md'>
                            <span>Your Multiplier: 20</span>
                            <span>Your Mood: 50</span>
                            <span>Your Letel: 17</span>
                            <span className='text-[#E92E2E]'>Total luck Score: 15%</span>
                        </div>
                        <div className='flex justify-center'>


                            <button
                                className="relative flex items-center justify-center w-40 h-16 text-white font-semibold bg-no-repeat bg-center bg-contain rounded-lg"
                                style={{ backgroundImage: `url(${button})` }}
                            >
                                <span className="absolute inset-0 bottom-1 flex items-center justify-center text-xl font-bold">
                                    Fight Now
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FightPopup;
