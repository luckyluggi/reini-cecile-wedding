import React, { useEffect, useRef, useState } from 'react';
import "./ImageSlider.css"
import { StaticImageData } from 'next/image';

interface ImageSliderProps  { 
  images: StaticImageData[]
}



function ImageSlider({images}: ImageSliderProps) {

  const carouselImages = useRef<HTMLDivElement>(null);
  const [allowAutoSlide, setAllowAutoSlide] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(allowAutoSlide){
        toggleImage("next", true);
      } else{
        setAllowAutoSlide(true)
      }
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  });

  const toggleImage = (goto: string, autoTriggered: boolean) => {
    if(!autoTriggered){
      setAllowAutoSlide(false)
    }
    if (carouselImages.current) {
      const allImages = Object.values(carouselImages.current.childNodes) as HTMLElement[];

      let activeImage = allImages.findIndex((val, idx) => {
        return val.classList.contains("active");
      });
      allImages[activeImage] &&
        allImages[activeImage].classList.remove("active");
      let next = activeImage + 1 >= allImages.length ? 0 : activeImage + 1;
      if (goto === "prev") {
        next = activeImage - 1 < 0 ? allImages.length - 1 : activeImage - 1;
      }
      allImages[next].classList.add("active");
      return true;
    }
  };

  return (
    <>
      <div className="carousel b">
        <div className="carousel-inner" ref={carouselImages}>
          {images.map((image, i) => {
            return (
              <div className={"item" + (i === 0 ? " active" : "")} key={i} style={{backgroundImage: `url(${image.src})`}}></div>
            );
          })}
        </div>
        <button
          className="c-controls prev b"
          onClick={() => {
            toggleImage("prev", false);
          }}
          ></button>
        <button
          className="c-controls next b"
          onClick={(e) => {
            toggleImage("next", false);
          }}
          ></button>
      </div>
    </>
  );
}


export default ImageSlider; 