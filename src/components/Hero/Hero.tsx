import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { PrimaryButton, SecondaryButton, GradientText } from '../shared/GlassCard';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 1.5rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem 3rem;
    min-height: auto;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const HeroText = styled.div`
  @media (max-width: 968px) {
    order: 2;
  }
`;

const Eyebrow = styled(motion.p)`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.25rem;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 7vw, 4.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
`;

const Title = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.35rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 520px;

  @media (max-width: 968px) {
    max-width: none;
  }
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.surfaceTwo};
  }
`;

const HeroImageWrap = styled(motion.div)`
  position: relative;

  @media (max-width: 968px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const ImageAccent = styled.div`
  position: absolute;
  inset: -1px;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  pointer-events: none;
`;

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;

  @media (max-width: 968px) {
    display: none;
  }
`;

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <HeroSection id="home">
      <HeroGrid>
        <HeroText>
          <Eyebrow
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Software Engineer & Entrepreneur
          </Eyebrow>

          <Name
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Eddie<br />
            <GradientText>Moger</GradientText>
          </Name>

          <Title
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            I build exceptional digital products with 15+ years of business insight.
            From corporate leadership to founding companies to writing
            code&nbsp;— I bring perspective most developers don't&nbsp;have.
          </Title>

          <ButtonRow
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <PrimaryButton
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </PrimaryButton>
            <SecondaryButton
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </SecondaryButton>
          </ButtonRow>

          <SocialRow
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <SocialLink
              href="https://github.com/EddieJorden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/eddie-moger/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:Eddie@EddieMoger.com"
              aria-label="Email"
            >
              <FiMail />
            </SocialLink>
          </SocialRow>
        </HeroText>

        <HeroImageWrap
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <HeroImage>
            <img
              src="/EddieInTheCity.jpg"
              alt="Eddie Moger — Software Engineer"
              loading="eager"
            />
            <ImageAccent />
          </HeroImage>
        </HeroImageWrap>
      </HeroGrid>

      <ScrollHint
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </ScrollHint>
    </HeroSection>
  );
};
