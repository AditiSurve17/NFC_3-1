import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const slideImages = [
    {url: '/images/slider/image1.jpg'},
    {url: '/images/slider/image2.jpg' },
    { url: '/images/slider/image3.jpg' },
  ];
  
const ImageSlider = () => {
    return (
    <div style={divStyle}>
    <SimpleImageSlider
      width={896}
      height={504}
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

    )
}

export default ImageSlider;