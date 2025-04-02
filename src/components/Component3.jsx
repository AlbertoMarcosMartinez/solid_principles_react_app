import React, { useState } from 'react';
import TextInput from './TextInput';
import NumberInput from './NumberInput';

const Component3 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <h1>Form Example</h1>
      <TextInput label="Name" value={name} onChange={setName} />
      <NumberInput label="Age" value={age} onChange={setAge} />
    </div>
  );
};

export default Component3;