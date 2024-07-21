import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
`;


const Container = styled.div`
  text-align: center;
  color: #fff;
  z-index: 2;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PricingTitle = styled.h1`
  font-size: 80px;
  margin-bottom: 40px;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  overflow: hidden;
  display: inline-block;
  font-size: 80px;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
  }

  ${'' /* &::before {
    left: 2px;
    text-shadow: -2px 0 #00f;
    animation: glitch 2s infinite linear alternate-reverse;
  }

  &::after {
    left: -2px;
    text-shadow: -2px 0 #f00;
    animation: glitch 1.5s infinite linear alternate-reverse;
  } */}

  &:hover {
    animation: none;
  }

  &:hover::before,
  &:hover::after {
    content: '';
  }

  &:hover::after {
    content: attr(data-text);
    left: 0;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff;
  }

  &::after {
    text-decoration: underline;
  }

  @keyframes glitch {
    0% {
      clip: rect(0, 900px, 0, 0);
    }
    20% {
      clip: rect(40px, 9999px, 56px, 0);
    }
    40% {
      clip: rect(20px, 900px, 50px, 0);
    }
    60% {
      clip: rect(30px, 9999px, 70px, 0);
    }
    80% {
      clip: rect(10px, 900px, 60px, 0);
    }
    100% {
      clip: rect(0, 900px, 0, 0);
    }
  }
`;

const PricingTable = styled.div`
  display: flex;
  gap: 30px;
  perspective: 1000px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 70px;
  }
`;

const PricingPlan = styled.div`
//   background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  transform: rotateY(0deg);
  flex: 1 1 300px;  /* Flex basis for responsive layout */

  &:hover {
    transform: rotateY(0) translateY(-20px);
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.7), 0 0 100px rgba(255, 255, 255, 0.4);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent);
    background-size: 50px 50px;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 0;
  }
`;

const PlanHeader = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
`;

const PlanTitle = styled.h2`
  font-size: 28px;
  margin: 0;
  color: #fff;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const PlanPrice = styled.p`
  font-size: 48px;
  margin: 10px 0 0;
  color: #fff;
  position: relative;

  span {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  z-index: 2;
  position: relative;
`;

const PlanFeature = styled.li`
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 700;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const PlanButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 25px;
  color: #000;
  background: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
  z-index: 2;
  position: relative;

  &:hover {
    background: #000;
    color: #fff;
    transform: scale(1.1);
  }
`;

const Prize = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <PricingTitle section-title>Prizes</PricingTitle>
        <PricingTable>
          <PricingPlan>
            <PlanHeader>
              <PlanTitle>Basic</PlanTitle>
              <PlanPrice>$9<span>/month</span></PlanPrice>
            </PlanHeader>
            <PlanFeatures>
              <PlanFeature>10 Projects</PlanFeature>
              <PlanFeature>5 GB Storage</PlanFeature>
              <PlanFeature>Basic Support</PlanFeature>
            </PlanFeatures>
            <PlanButton href="#">Choose Plan</PlanButton>
          </PricingPlan>

          <PricingPlan>
            <PlanHeader>
              <PlanTitle>Pro</PlanTitle>
              <PlanPrice>$29<span>/month</span></PlanPrice>
            </PlanHeader>
            <PlanFeatures>
              <PlanFeature>50 Projects</PlanFeature>
              <PlanFeature>50 GB Storage</PlanFeature>
              <PlanFeature>Priority Support</PlanFeature>
            </PlanFeatures>
            <PlanButton href="#">Choose Plan</PlanButton>
          </PricingPlan>

          <PricingPlan>
            <PlanHeader>
              <PlanTitle>Enterprise</PlanTitle>
              <PlanPrice>$99<span>/month</span></PlanPrice>
            </PlanHeader>
            <PlanFeatures>
              <PlanFeature>Unlimited Projects</PlanFeature>
              <PlanFeature>200 GB Storage</PlanFeature>
              <PlanFeature>24/7 Support</PlanFeature>
            </PlanFeatures>
            <PlanButton href="#">Choose Plan</PlanButton>
          </PricingPlan>
        </PricingTable>
      </Container>
    </>
  );
};

export default Prize;
