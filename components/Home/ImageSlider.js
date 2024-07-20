import React, { useState, useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const slideImages = [
  { url: '/images/slider/image1.jpg' },
  { url: '/images/slider/image2.jpg' },
  { url: '/images/slider/image3.jpg' },
];

const ImageSlider = () => {
  const [dimensions, setDimensions] = useState({ width: 896, height: 504 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setDimensions({ width: 896, height: 504 });
      } else if (window.innerWidth >= 768) {
        setDimensions({ width: 300, height: 200 });
      } else {
        setDimensions({ width: window.innerWidth - 20, height: (window.innerWidth - 20) * 0.5625 });
      }
    };

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
      <SimpleImageSlider
        width={dimensions.width}
        height={dimensions.height}
        images={slideImages}
        showBullets={true}
        showNavs={true}
        loop
        autoPlay
        slideDuration={1}
        autoPlayDelay={2}
        navSize={30}
        navMargin={5}
      />
    </div>
  );
}

export default ImageSlider;
