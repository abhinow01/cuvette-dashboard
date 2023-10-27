import React, { useState } from "react";
import CustomModal from "./CustomModal";
function Header() {
    const modalStyle = {
      backgroundColor: '#fff',
      border: '1px solid #EBF0F5',
      borderRadius: '8px',
      padding: '20px',
      height:'109px',
      width: '717px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative', // Add position relative
    };
  
    const logoStyle = {
      height: '60px',
    };
  
    const buttonStyle = {
      backgroundColor: '#142683',
      color: '#fff',
      height: '44px',
      width: '120px',
      padding: '4px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      position: 'absolute', // Set to absolute
      right: '20px',
      bottom: '55px',
    };
  
    const contentStyle = {
      flex: 1,
      marginLeft: '20px',
    };

    const [isModalOpen,setIsModalOpen] = useState(false);
    const handleUpdateButtonClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div style={modalStyle}>
        <div>
          <img src="/assets/html-logo.png" alt="HTML Logo" style={logoStyle} />
        </div>
        <div style={contentStyle}>
          <div style={{
            color: '#222F3E',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 'normal',
            letterSpacing: '-0.32px'
          }}>
            Hypertext Markup Language
          </div>
          <br />
          <div style={{
            color: 'var(--secondary-text, #566474)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '180%',
            letterSpacing: '-0.24px'
          }}>
            Questions: 08| Duration: 15 mins| Updated on : 05 June 2021
          </div>
          <button style={buttonStyle} onClick={handleUpdateButtonClick}>Update</button>
        </div>
        <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    );
  }
  
  export default Header;
  