import React from 'react';
import Button from './ButtonComponent';

// Diferentes comportamientos sin modificar el componente Button
const Component2 = () => {
  const handleSubmit = () => {
    console.log('Submit clicked!');
  };

  const handleCancel = () => {
    console.log('Cancel clicked!');
  };

  return (
    <div>
      <Button label="Submit" onClick={handleSubmit} />
      <Button label="Cancel" onClick={handleCancel} />
    </div>
  );
};

export default Component2;