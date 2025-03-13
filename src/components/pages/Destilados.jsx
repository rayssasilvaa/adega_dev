import { useEffect, useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import ImageData from '../../destilados.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import '../../styles/pages/destilados.sass';

const Destilados = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(ImageData);
  }, []);

  const addToCart = (image) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = storedCart.find(item => item.id === image.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      storedCart.push({ ...image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(storedCart));
  };

  return (
    <div className='grid-container-des'>
      {images.map(image => (
        <div key={image.id} className={`image-card-des ${image.size}`}>
          <LazyLoadImage
            src={image.src}
            alt={image.title}
            effect="opacity"  
            loading="lazy" 
          />
          <h3>{image.title}</h3>
          <span className='price'>{image.price} </span>
          <button
            className="plus"
            onClick={() => addToCart(image)}
          >
            <FaCartPlus />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Destilados;
