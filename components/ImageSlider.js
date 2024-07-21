import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #EEE;
    user-select: none;
    font-family: sans-serif;
  }
`;

const Slider = styled.section`
  position: relative;
  width: 50%;
  height: 32vw;
  margin: 150px auto;
  font-family: 'Helvetica Neue', sans-serif;
  perspective: 1400px;
  transform-style: preserve-3d;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
  display: none;
`;

const Label = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: white;
  font-size: 70px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 400ms ease, box-shadow 400ms ease;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 3px;
  }
`;

const SliderWrapper = styled.div`
  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 0 20px 10px rgba(255, 255, 0, 0.8), 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }

  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px rgba(0,0,0, 0.3), 0 2px 2px rgba(0,0,0, 0.2);
    transform: translate3d(20%, 0, -100px);
  }

  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(40%, 0, -250px);
  }

  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px rgba(0,0,0, 0.4);
    transform: translate3d(-40%, 0, -250px);
  }

  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px rgba(0,0,0, 0.3), 0 2px 2px rgba(0,0,0, 0.2);
    transform: translate3d(-20%, 0, -100px);
  }
`;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide % 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <SliderWrapper>
        <Slider id="slider">
          <Input type="radio" name="slider" id="s1" checked={currentSlide === 1} readOnly />
          <Input type="radio" name="slider" id="s2" checked={currentSlide === 2} readOnly />
          <Input type="radio" name="slider" id="s3" checked={currentSlide === 3} readOnly />
          <Input type="radio" name="slider" id="s4" checked={currentSlide === 4} readOnly />
          <Input type="radio" name="slider" id="s5" checked={currentSlide === 5} readOnly />

          <Label htmlFor="s1" id="slide1">
            <img src="https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg" alt="" />
          </Label>
          <Label htmlFor="s2" id="slide2">
            <img src="https://images6.alphacoders.com/462/thumb-1920-462371.jpg" alt="" />
          </Label>
          <Label htmlFor="s3" id="slide3">
            <img src="https://wallpaperaccess.com/full/1154341.jpg" alt="" />
          </Label>
          <Label htmlFor="s4" id="slide4">
            <img src="https://wallpapercave.com/wp/wp2634222.jpg" alt="" />
          </Label>
          <Label htmlFor="s5" id="slide5">
            <img src="https://images5.alphacoders.com/343/thumb-1920-343645.jpg" alt="" />
          </Label>
        </Slider>
      </SliderWrapper>
    </>
  );
};

export default App;
