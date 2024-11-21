import React from 'react';
import popupImage from '../../images/popup.svg';
import iconClose from '../../images/icon_close.svg';
import tabSelect from '../../images/tab_select.svg';
import cat_1 from '../../images/cat_1.svg';
import cat_2 from '../../images/cat_2.svg';
import cat_3 from '../../images/cat_3.svg';
import cat_4 from '../../images/cat_4.svg';
import cat_5 from '../../images/cat_5.svg';
import cat_6 from '../../images/cat_6.svg';
import cat_7 from '../../images/cat_7.svg';
import cat_8 from '../../images/cat_8.svg';
import cat_9 from '../../images/cat_9.svg';
import iconGold from '../../images/icon_gold.svg';
import buy_button from '../../images/button_buy.svg';
// import frame from '../../images/frame.svg';

const ShopPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Don't render if the popup is not open

    // Array of shop items
    const shopItems = [
        { id: 1, level: 1, icon: cat_1, price: 500 },
        { id: 2, level: 16, icon: cat_2, price: 500 },
        { id: 3, level: 1, icon: cat_3, price: 500 },
        { id: 4, level: 1, icon: cat_4, price: 500 },
        { id: 5, level: 1, icon: cat_5, price: 500 },
        { id: 6, level: 1, icon: cat_6, price: 500 },
        { id: 7, level: 1, icon: cat_7, price: 500 },
        { id: 8, level: 1, icon: cat_8, price: 500 },
        { id: 9, level: 1, icon: cat_9, price: 500 },
        // Add more items here as needed
    ];

    // Category tabs array
    const categories = ["Skin", "Heard", "VVV..."];

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
                <img src={popupImage} alt="Popup" className="w-full h-auto" />

                {/* Shop Content */}
                <div className="absolute inset-0 flex flex-col items-center py-2 px-6">
                    {/* Shop Header */}
                    <h2 className="text-[#FFFFFF] text-2xl font-bold mb-4">Shop</h2>

                    {/* Category Tabs */}
                    <div className="flex space-x-2 mb-4 items-start">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="relative flex items-center justify-center w-20 h-12 text-white font-semibold bg-no-repeat bg-center bg-contain rounded-lg"
                                style={{ backgroundImage: `url(${tabSelect})` }}
                            >
                                <span className="absolute inset-0 bottom-1 flex items-center justify-center text-sm font-semibold">
                                    {category}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Shop Items Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-4 w-full overflow-y-auto scroll-container">
                    {shopItems.map((item) => (
                            <div key={item.id} className="flex flex-col items-center">
                                {/* Item Frame */}
                                <div
                                    className="flex flex-col items-center bg-[#F7D097] rounded-xl p-2 border border-[#D97C00]"
                                >
                                    {/* Level Text (Top-Left Corner) */}
                                    {/* <span className="absolute bg-[#FF9F26] text-xs font-bold text-[#FFFFFF] px-1 py-0.5 rounded">
                                        {item.level}
                                    </span> */}
                                    
                                    {/* Item Icon */}
                                    <img src={item.icon} alt="Cat Icon" className="w-16 h-16" />
                                </div>

                                {/* Price Button (Outside the Frame) */}
                                <div
                                    className="relative flex items-center justify-center w-20 h-10 text-white font-semibold bg-no-repeat bg-center bg-contain rounded-lg "
                                    style={{ backgroundImage: `url(${buy_button})` }}
                                >
                                    <span>{item.price}</span>
                                    <img src={iconGold} alt="Coin Icon" className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPopup;
