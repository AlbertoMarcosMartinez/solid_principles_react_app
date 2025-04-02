import React from 'react';
import InputField from './InputField';

const TextInput = ({ label, value, onChange }) => {
  return (
    <InputField 
      label={label} 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  );
};

export default TextInput;