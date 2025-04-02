import React from 'react';
import InputField from './InputField';

const NumberInput = ({ label, value, onChange }) => {
  return (
    <InputField 
      label={label} 
      value={value} 
      onChange={(e) => onChange(Number(e.target.value))} 
      type="number"
    />
  );
};

export default NumberInput;