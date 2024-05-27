import React from 'react';
import "./Card.css"
import ImageSlider from './ImageSlider';
import Image, { StaticImageData } from 'next/image';

interface CardProps  { 
  children: React.ReactNode,
  maxWidth?: string
  images?: StaticImageData[]
}

function Card({children, images, maxWidth}: CardProps) {
  return (
    <div className={"card"} style={{maxWidth: maxWidth || "100%"}}>
      {images !== undefined && images.length === 1 && <Image className='card-image' src={images[0]} alt='climbing-wall' />}
      {images !== undefined && images.length > 1 && <ImageSlider images={images} />}
      <div className={"card-content"}>
        {children}
      </div>
    </div>
  );
}

export default Card;