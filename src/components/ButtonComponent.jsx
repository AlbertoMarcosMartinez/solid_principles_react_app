import React from 'react';

// El componente está abierto a extensión mediante las props, pero cerrado a modificaciones.
const ButtonComponent = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonComponent;