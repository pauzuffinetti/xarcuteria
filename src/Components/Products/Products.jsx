import React from 'react';
import './Products.css';
import Producto1 from '../../assets/Producto1.jpg';
import Producto2 from '../../assets/Producto2.jpg';
import Producto3 from '../../assets/Producto3.jpg';
import Producto4 from '../../assets/Producto4.jpg';
import Producto5 from '../../assets/Producto5.jpg';
import Producto6 from '../../assets/Producto6.jpg';
import Producto7 from '../../assets/Producto7.jpg';

const images = [
  { src: Producto1, description: 'Jamón crudo' },
  { src: Producto2, description: 'Producto' },
  { src: Producto3, description: 'Producto' },
  { src: Producto4, description: 'Producto' },
  { src: Producto5, description: 'Producto' },
  { src: Producto6, description: 'Producto' },
  { src: Producto7, description: 'Producto' },
];

const Products = () => {
  return (
    <div>
      <div className="texto-container">
        <h2>Productos</h2>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" data-description={image.description}>
            <img src={image.src} alt={image.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
