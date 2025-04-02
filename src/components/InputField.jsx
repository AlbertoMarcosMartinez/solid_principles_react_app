import React from 'react';

// Componente base InputField
const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;