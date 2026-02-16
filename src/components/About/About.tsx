import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionContainer, SectionHeading } from '../shared/GlassCard';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: start;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryColumn = styled(motion.div)``;

// Bold section label
const SectionLabel = styled.div`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.racing};
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.racing};
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 0, 57, 0.05);
  margin-bottom: 2rem;
`;

const StoryTitle = styled.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  span {
    background: ${({ theme }) => theme.gradients.racing};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

// FIXED: Racing image with proper mobile display
const FeaturedRacingImage = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.racing};
  box-shadow: ${({ theme }) => theme.shadows.racing};
  background: ${({ theme }) => theme.colors.carbon};

  /* Aspect ratio maintains shape */
  aspect-ratio: 4 / 3;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    /* CRITICAL FIX: contain on mobile to prevent cropping */
    object-fit: contain;
    object-position: center;
    display: block;
  }

  /* Desktop can use cover for dramatic effect */
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
    background: linear-gradient(
      to top,
      rgba(10, 10, 10, 0.4) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const ImageCaption = styled.p`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  z-index: 5;
`;

// Photo grid with proper mobile handling
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.carbon};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.racing};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.racing};
  }
`;

// FIXED: Photo wrapper with proper mobile aspect ratio
const PhotoWrapper = styled.div`
  position: relative;
  width: 100%;
  /* Fixed aspect ratio prevents awkward cropping */
  aspect-ratio: 3 / 4;
  background: ${({ theme }) => theme.colors.carbon};

  img {
    width: 100%;
    height: 100%;
    /* CRITICAL FIX: contain ensures full image visible on mobile */
    object-fit: contain;
    object-position: center;
    display: block;
  }

  /* Desktop can use cover */
  @media (min-width: 1025px) {
    img {
      object-fit: cover;
    }
  }
`;

const PhotoLabel = styled.p`
  padding: 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceOne};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

// Stats with racing aesthetic
const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatBlock = styled(motion.div)`
  position: relative;
  padding: 2.5rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceOne};
  transition: ${({ theme }) => theme.transitions.base};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.gradients.racing};
    transform: scaleX(0);
    transform-origin: left;
    transition: ${({ theme }) => theme.transitions.base};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.racing};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const StatNumber = styled.h3`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  margin-bottom: 0.5rem;
  background: ${({ theme }) => theme.gradients.racing};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;

const RacingText = styled.span`
  background: ${({ theme }) => theme.gradients.racing};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;

export const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const photos = [
    {
      src: '/New-startup-office.jpeg',
      alt: 'Eddie at his startup office — Biirdee Travel, Burlingame CA',
      caption: 'Biirdee Travel Office, Burlingame CA',
    },
    {
      src: '/New-York-Xeni-app-office-.jpeg',
      alt: 'Eddie at the Xeni App office in New York City',
      caption: 'Xeni App, New York City',
    },
    {
      src: '/me_in_hungary.jpeg',
      alt: 'Eddie exploring the Párisi Udvar in Budapest, Hungary',
      caption: 'Budapest, Hungary',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Building Businesses' },
    { number: '8', label: 'Production Projects' },
    { number: '3', label: 'Companies Founded' },
  ];

  return (
    <SectionContainer id="about" ref={ref}>
      <SectionHeading
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        <RacingText>The Journey</RacingText> From Boardrooms to Code
      </SectionHeading>

      <AboutContent>
        <StoryColumn
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          <SectionLabel>MY STORY</SectionLabel>
          
          <StoryTitle>
            Not Your Typical <span>Developer</span>
          </StoryTitle>

          <Paragraph>
            After <strong>8 years leading teams in corporate management</strong> and{' '}
            <strong>15 years running my own businesses</strong>, I discovered my true
            calling: building things with code. That unconventional path — from
            boardrooms to startups to software engineering — gives me a perspective
            most developers simply don't have.
          </Paragraph>

          <Paragraph>
            I understand <strong>business strategy</strong>. I understand{' '}
            <strong>user psychology</strong>. I know what it takes to{' '}
            <strong>ship products that matter</strong>. Today, I specialize in modern
            web applications with React, TypeScript, Node.js, and AI integration —
            but I bring 15 years of business insight to every line of code.
          </Paragraph>

          <Paragraph>
            Outside of tech, I push limits on the track and in the gym. Whether it's
            racing at the <strong>Nürburgring</strong>, climbing mountains, or
            competing in <strong>Muay Thai</strong> — the same relentless drive
            fuels everything I build. I don't do average. Neither should your
            software.
          </Paragraph>
        </StoryColumn>

        <FeaturedRacingImage
          variants={scaleIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          <img
            src="/gt86nurburgring.jpeg"
            alt="Eddie racing a GT86 at the Nürburgring Nordschleife in Germany"
            loading="lazy"
          />
          <ImageCaption>GT86 at Nürburgring Nordschleife</ImageCaption>
        </FeaturedRacingImage>
      </AboutContent>

      <PhotoGrid>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            variants={scaleIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3 + index * 0.2}
          >
            <PhotoCard>
              <PhotoWrapper>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </PhotoWrapper>
              <PhotoLabel>{photo.caption}</PhotoLabel>
            </PhotoCard>
          </motion.div>
        ))}
      </PhotoGrid>

      <StatsGrid
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={5}
      >
        {stats.map((stat, index) => (
          <StatBlock
            key={stat.label}
            variants={scaleIn}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={5 + index * 0.15}
          >
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatBlock>
        ))}
      </StatsGrid>
    </SectionContainer>
  );
};
