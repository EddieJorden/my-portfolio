import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { PrimaryButton, SecondaryButton } from '../shared/GlassCard';

// Full-bleed hero with racing image background
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0;

  @media (max-width: 768px) {
    min-height: 100svh;
  }
`;

// Racing background image with dramatic overlay
const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(10, 10, 10, 0.95) 0%,
      rgba(10, 10, 10, 0.85) 40%,
      rgba(10, 10, 10, 0.7) 70%,
      rgba(255, 0, 57, 0.1) 100%
    );
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

// Speed lines effect (racing aesthetic)
const SpeedLines = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 100px,
    rgba(255, 0, 57, 0.03) 100px,
    rgba(255, 0, 57, 0.03) 102px
  );
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 8rem 2rem 4rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 7rem 1.5rem 3rem;
    gap: 2.5rem;
  }
`;

const HeroText = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Racing-inspired eyebrow with checkered flag accent
const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.racing};
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.racing};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 0, 57, 0.05);
  backdrop-filter: blur(10px);
  width: fit-content;

  &::before {
    content: '▸';
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    margin: 0 auto 1.5rem;
  }
`;

// Massive, bold name
const Name = styled(motion.h1)`
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  line-height: 0.9;
  letter-spacing: -0.05em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 0 0 80px rgba(255, 0, 57, 0.3);

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }
`;

// Racing red gradient text
const RacingText = styled.span`
  background: ${({ theme }) => theme.gradients.racing};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  filter: drop-shadow(0 0 20px rgba(255, 0, 57, 0.5));
`;

// Bold title emphasizing ENTREPRENEUR
const Title = styled(motion.p)`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
  margin-bottom: 1.25rem;
  max-width: 700px;

  @media (max-width: 1024px) {
    max-width: 600px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 650px;

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    max-width: 550px;
  }
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const RacingButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.gradients.accent};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.racing};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 1rem 2rem;
  font-size: 0.9rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.racing}, 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const OutlineButton = styled(SecondaryButton)`
  border: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: 1rem 2rem;
  font-size: 0.9rem;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.base};
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);

  &:hover {
    color: ${({ theme }) => theme.colors.racing};
    border-color: ${({ theme }) => theme.colors.racing};
    background: rgba(255, 0, 57, 0.1);
    transform: translateY(-3px);
  }
`;

// Image showcase - FIXED for mobile
const ImageShowcase = styled(motion.div)`
  position: relative;
  
  @media (max-width: 1024px) {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.racing};
  box-shadow: ${({ theme }) => theme.shadows.racing};
  background: ${({ theme }) => theme.colors.carbon};

  /* FIXED: Proper aspect ratio for mobile - no cropping */
  aspect-ratio: 3 / 4;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    /* CRITICAL FIX: Use contain to show full image on mobile */
    object-fit: contain;
    object-position: center;
    display: block;
  }

  /* Desktop: can use cover for dramatic effect */
  @media (min-width: 1025px) {
    img {
      object-fit: cover;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 60px rgba(255, 0, 57, 0.2);
    pointer-events: none;
  }
`;

const AccentStripe = styled(motion.div)`
  position: absolute;
  bottom: -8px;
  right: -8px;
  left: 20%;
  height: 4px;
  background: ${({ theme }) => theme.gradients.racing};
  border-radius: ${({ theme }) => theme.radius.full};
  box-shadow: ${({ theme }) => theme.shadows.racing};

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 20;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.racing};
  }
`;

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <HeroSection id="home">
      <HeroBackground>
        <img
          src="/gt86nurburgring.jpeg"
          alt="Racing at Nürburgring"
          loading="eager"
        />
      </HeroBackground>

      <SpeedLines
        animate={{
          backgroundPosition: ['0px 0px', '1000px 0px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <ContentWrapper>
        <HeroText>
          <Eyebrow
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={0}
          >
            Entrepreneur • Racer • Builder
          </Eyebrow>

          <Name
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={1}
          >
            Eddie
            <RacingText>Moger</RacingText>
          </Name>

          <Title
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={2}
          >
            15+ years building businesses. Now I build exceptional software.
          </Title>

          <Subtitle
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={3}
          >
            From <strong>corporate leadership</strong> to founding <strong>multiple startups</strong> to
            writing production code — I bring the perspective most developers don't have.
            Business-minded. Problem solver. Relentlessly driven.
          </Subtitle>

          <ButtonRow
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={4}
          >
            <RacingButton
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </RacingButton>
            <OutlineButton
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </OutlineButton>
          </ButtonRow>

          <SocialRow
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={5}
          >
            <SocialLink
              href="https://github.com/EddieJorden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -3 }}
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/eddie-moger/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -3 }}
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:eddie@eddiemoger.com"
              aria-label="Email"
              whileHover={{ y: -3 }}
            >
              <FiMail />
            </SocialLink>
          </SocialRow>
        </HeroText>

        <ImageShowcase
          variants={scaleIn}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <ProfileImage>
            <img
              src="/EddieInTheCity.jpg"
              alt="Eddie Moger — Entrepreneur & Software Engineer"
              loading="eager"
            />
          </ProfileImage>
          <AccentStripe
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          />
        </ImageShowcase>
      </ContentWrapper>

      <ScrollIndicator
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};
