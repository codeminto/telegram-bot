import React from 'react';
import popupImage from '../../images/popup.svg';
import iconClose from '../../images/icon_close.svg';
import iconGold from '../../images/icon_gold.svg';
import buy_button from '../../images/button_buy.svg';


const FeedPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if the popup is not open

    const foodPrice = [
        { id: 1, price: 500 },
        { id: 2, price: 500 },
        { id: 3, price: 500 },
        { id: 4, price: 500 },
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
                    <h2 className="text-[#FFFFFF] text-2xl font-bold mb-10">Feed</h2>

                    <div className="grid grid-cols-3 gap-4 mb-4 w-full overflow-y-auto scroll-container">
                        {foodPrice.map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                {/* Item Frame */}
                                <div
                                    className="flex flex-col items-center bg-[#F7D097] rounded-xl p-4 border border-[#D97C00] w-[160px] h-[80px] max-w-full"
                                >
                                    {/* Content goes here */}
                                </div>

                                {/* Price Button (Outside the Frame) */}
                                <div
                                    className="relative flex items-center justify-center w-20 h-10 text-white font-semibold bg-no-repeat bg-center bg-contain rounded-lg"
                                    style={{ backgroundImage: `url(${buy_button})` }}
                                >
                                    <span>{item.price}</span>
                                    <img src={iconGold} alt="Coin Icon" className="w-5 h-4 ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeedPopup;
