import { useEffect, useState } from 'react';
import axios from 'axios';

const useDogBreeds = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = 'live_jYAMJMzFizHc9xHNeKXgx9JCt3NbHdHEfiKj824an7iTJ9qPeWizbU8kmEMWCsuh';

  useEffect(() => {
    axios.get("https://api.thedogapi.com/v1/breeds", {
      headers: {
        'x-api-key': apiKey
      }
    })
    .then((res) => {
      // Shuffle the array and pick the first 10 items
      const shuffledBreeds = res.data.sort(() => 0.5 - Math.random());
      const randomBreeds = shuffledBreeds.slice(0, 10);
      setDogBreeds(randomBreeds);
    })
    .catch((e) => {
      console.error(e.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  return { dogBreeds, isLoading };
};

export default useDogBreeds;