import React from 'react';
import '../css/Header.css'; 

const Header = ({
  title,
  fontSize = '24px',
  fontFamily = 'Arial, sans-serif',
  color = '#FFFFFF',
  isCentered = false,
  hasImage = false,
  imageUrl = '',
  imageAlt = 'Logo',
  imageSize = '40px',
  backgroundColor = '#34495E',
  padding = '20px'
}) => {
  return (
    <header
      className="header-container"
      style={{
        backgroundColor,
        padding,
        display: 'flex',
        alignItems: 'center',
        justifyContent: isCentered ? 'center' : 'space-between',
      }}
    >
      {hasImage && (
        <div className="header-logo">
          <img
            src={imageUrl}
            alt='imageAlt'            
            style={{ width: imageSize, height: imageSize, marginRight: '15px' }}
          />
        </div>
      )}
      <div
        className="header-title"
        style={{
          fontSize,
          fontFamily,
          color,
          textAlign: isCentered ? 'center' : 'left',
        }}
      >
        {title}
      </div>
    </header>
  );
};

export default Header;
