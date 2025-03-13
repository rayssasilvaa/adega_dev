import { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa6";
import Banner from './Image'
import ImageData from '../bebidas.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import '../styles/components/maingrid.sass'

const Maingrid = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(ImageData)
  }, [])

  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  const addToCart = (image) => {

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = storedCart.find(item => item.id === image.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      storedCart.push({ ...image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(storedCart));
  }

  return (
    <div className='main-grid'>
      <Banner />
      <h1 className='main-title'>Principais buscas: </h1>

      <div className='grid-container'>
        {images.map(image => (
          <div key={image.id} className={`image-card ${image.title.toLowerCase()}`}>
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
    </div>

  )
}

export default Maingrid;
