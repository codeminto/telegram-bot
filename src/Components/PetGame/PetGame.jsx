import React, { useState } from 'react';
import './PetGame.css';

import shop from '../../images/icon_shop.png';
import home from '../../images/icon_home.png';
import profile from '../../images/icon_profile.png';
import cat from '../../images/cat.png';
import button_violet from '../../images/button_violet.png';
import button_yellow from '../../images/button_yellow_full.png';
import icon_gold from '../../images/icon_gold.png';
import emoji2 from '../../images/emoji_2.png';

import ProfilePopup from '../ProfilePopup/ProfilePopup';
import ShopPopup from '../ShopPopup/ShopPopup';
import FightPopup from '../FightPopup/FightPopup';
import FeedPopup from '../FeedPopup/FeedPopup';




const PetGame = () => {


  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isShopPopupOpen, setIsShopPopupOpen] = useState(false);
  const [isFightPopupOpen, setIsFightPopupOpen] = useState(false);  // State for fight popup
  const [isFeedPopupOpen, setIsFeedPopupOpen] = useState(false);  // State for fight popup

  const handleProfileClick = () => {
    setIsProfilePopupOpen(true);
    setIsShopPopupOpen(false); // Ensure shop popup is closed when profile is opened
    setIsFightPopupOpen(false); // Close fight popup when profile is opened
    setIsFeedPopupOpen(false);
  };

  const handleCloseProfile = () => {
    setIsProfilePopupOpen(false);
  };

  const handleShopClick = () => {
    setIsShopPopupOpen(true);
    setIsProfilePopupOpen(false); // Ensure profile popup is closed when shop is opened
    setIsFightPopupOpen(false); // Close fight popup when shop is opened
    setIsFeedPopupOpen(false);
  };

  const handleCloseShop = () => {
    setIsShopPopupOpen(false);
  };

  const handleFightClick = () => {
    setIsFightPopupOpen(true); // Open fight popup
    setIsProfilePopupOpen(false); // Close profile popup when fight is opened
    setIsShopPopupOpen(false); // Close shop popup when fight is opened
    setIsFeedPopupOpen(false);
  };

  const handleCloseFight = () => {
    setIsFightPopupOpen(false);
  };

  const handleFeedClick = () => {
    setIsFeedPopupOpen(true); // Open fight popup
    setIsProfilePopupOpen(false); // Close profile popup when fight is opened
    setIsShopPopupOpen(false); // Close shop popup when fight is opened
    setIsFightPopupOpen(false);
  };

  const handleCloseFeed = () => {
    setIsFeedPopupOpen(false);
  };


  return (
    <div className="game-container">
      <div className="main-content">

        {/* Header Section */}
        <div className="header">
          <div className="level-section">
            <div className="content-wrapper">
              <div className="level-text">IV8</div>
              <div className="progress-bar-container-lv">
                <div className="progress-bar-lv">
                  <div className="progress-lv" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="coins">
            <img src={icon_gold} className='coin-icon' alt="Coins" />
            <span className="coin-text">2500</span>
          </div>
        </div>

        <div className="secondary-progress-bar">
          <div className="progress-bar">
            <div className="progress" style={{ width: '78%' }}></div>
            <div className="progress-icon">
              <span>78</span><img src={emoji2} alt="Cat Icon" />
            </div>
          </div>
        </div>

        <div className="character-section">
          <img src={cat} alt="Cat Character" className="cat-image" />
        </div>

        {/* Multipliers */}
        <div class="container">
          <div class="multiplier-bar">
            <div class="multiplier-start">x1</div>
            <div class="multiplier-center">
              <span class="multiplier-center-text">x8</span>
            </div>
            <div class="multiplier-end">x10</div>
          </div>
        </div>




        {/* Action Buttons */}
        <div className="actions">
          <button className="action-button" onClick={handleFeedClick}>
            <img src={button_violet} alt="buttonviolet" />
            <span className="button-text">Feed</span>
          </button>
          <button className="action-button center-button" onClick={handleFightClick}>
            <img src={button_yellow} alt="buttonyellow" />
            <span className="center-button-text button-text">FIGHT</span>
            <span className="timer-text">⏱ 30m20s</span>
          </button>
          <button className="action-button">
            <img src={button_violet} alt="buttonviolet" />
            <span className="button-text">Train</span>
          </button>
        </div>

        <div class="footer">
          <button class="footer-button" onClick={handleShopClick}>
            <img src={shop} alt="Shop Icon" />
            <span>SHOP</span>
          </button>
          <button class="footer-button active">
            <img src={home} alt="Home Icon" />
            <span>HOME</span>
          </button>
          <button class="footer-button" onClick={handleProfileClick}>
            <img src={profile} alt="Profile Icon" />
            <span>PROFILE</span>
          </button>
        </div>

        {/* Profile Popup */}
        <ProfilePopup isOpen={isProfilePopupOpen} onClose={handleCloseProfile} />
        <ShopPopup isOpen={isShopPopupOpen} onClose={handleCloseShop} />
        <FightPopup isOpen={isFightPopupOpen} onClose={handleCloseFight} />
        <FeedPopup isOpen={isFeedPopupOpen} onClose={handleCloseFeed} />
      </div>
    </div>
  );
};

export default PetGame;
