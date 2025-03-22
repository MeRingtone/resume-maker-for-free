import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const HeroHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;

  & > * {
    flex-basis: 50%;
  }

  h3 {
    margin-bottom: -10px;
    font-weight: normal;
    text-align: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .cta-holder {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    h3 {
      text-align: start;
    }

    h1 {
      font-size: 2.5rem;
      text-align: start;
    }

    .cta-holder {
      justify-content: flex-start;
    }
  }
`;

const CTA = styled.span`
  padding: 1.0rem 2rem;
  background: linear-gradient(135deg, #6c63ff 0%, #8b85ff 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  font-size: 2.2rem;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(108, 99, 255, 0.8);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(108, 99, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 16px rgba(108, 99, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
  }
`;

const Hero: NextPage = () => {
  return (
    <HeroHolder>
      <div>
        <h3>Create and Download in PDF Format</h3>
        <h1>
          Resume Builder For Free 
        </h1>
        <h2>Simple, Easy, and Free</h2><br/>
        <div className="cta-holder">
          <Link href="/editor">
            <a>
              <CTA>Start Making Your Resume</CTA>
            </a>
          </Link>
        </div>
      </div>
      <Image src="/hiring.svg" alt="hiring" width="300px" height="300px" priority />
    </HeroHolder>
  );
};

export default Hero;
