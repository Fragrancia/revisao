import React, { useState } from 'react';

const Cachorro = () => {
  const [cachorroImage, setDogImage] = useState('');

  const fetchCachorroImage = async () => {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search');
      const data = await response.json();
      setDogImage(data[0].url);
    } catch (error) {
      console.error('Erro ao buscar imagem do cachorro:', error);
    }
  };

  return (
    <div>
      {cachorroImage && <img src={cachorroImage} alt="Cachorro" />}
      <p></p>
      <button onClick={fetchCachorroImage}>Buscar Imagem de Cachorro</button>
    </div>
  );
};

export default Cachorro;
