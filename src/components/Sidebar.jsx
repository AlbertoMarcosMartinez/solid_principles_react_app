import React, { useState } from 'react';

const Sidebar = ({ onSelect, selected }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonStyle = (isHovered, isSelected) => ({
    padding: '15px 20px',
    margin: '10px 0',
    border: 'none',
    color: isHovered ? 'black' : isSelected ? 'white' : 'black',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '10px',
    boxShadow: isHovered || isSelected ? '0 4px 10px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.15)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'all 0.3s ease',
    backgroundColor: isSelected ? '#df3079' : isHovered ? '#d3d3d3' : 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  });

  const buttons = [
    { text: 'Single Responsibility Principle (SRP)', component: 1 },
    { text: 'Open/Closed Principle (OCP)', component: 2 },
    { text: 'Liskov Substitution Principle (LSP)', component: 3 },
    { text: 'Interface Segregation Principle (ISP)', component: 4 },
    { text: 'Dependency Inversion Principle (DIP)', component: 5 },
  ];

  return (
    <div style={{ width: '200px', height: '100vh', backgroundColor: '#f0f0f0', padding: '10px' }}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          style={buttonStyle(hoveredButton === index, selected === btn.component)}
          onClick={() => onSelect(btn.component)}
          onMouseEnter={() => setHoveredButton(index)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
