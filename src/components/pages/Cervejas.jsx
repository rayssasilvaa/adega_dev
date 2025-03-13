import { useEffect, useState } from 'react'
import { FaCartPlus } from "react-icons/fa";
import ImageData from '../../cervejas.json'
import { LazyLoadImage } from 'react-lazy-load-image-component';


import '../../styles/pages/cervejas.sass'

const Cervejas = () => {
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
    <div className='grid-container-beer'>
      {images.map(image => (
        <div key={image.id} className={`image-card-beer ${image.size}`}>
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
  )
}

export default Cervejas;
