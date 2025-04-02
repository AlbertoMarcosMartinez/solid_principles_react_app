import React from 'react';
import useDogBreeds from '../hooks/useDogBreeds';
import DogList from './DogList';

const Componente1 = () => {
  const { dogBreeds, isLoading } = useDogBreeds();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <DogList dogBreeds={dogBreeds} />;
};

export default Componente1;
