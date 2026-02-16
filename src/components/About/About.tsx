import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SectionContainer,
  SectionHeading,
  GradientText,
} from '../shared/GlassCard';

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 5rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StoryColumn = styled(motion.div)``;

const Paragraph = styled.p`
  font-size: 1.075rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

const FeaturedImage = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PhotoCard = styled(motion.div)`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;

    @media (max-width: 768px) {
      height: 220px;
    }
  }
`;

const PhotoCaption = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-top: 0.75rem;
  letter-spacing: 0.01em;
`;

const StatsRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatBlock = styled(motion.div)`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceOne};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 0.25rem;
  background: ${({ theme }) => theme.gradients.accent};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const photos = [
    {
      src: '/New-startup-office.jpeg',
      alt: 'Eddie at his startup office — Biirdee Travel, Burlingame CA',
      caption: 'At the office — Biirdee Travel, Burlingame CA',
    },
    {
      src: '/New-York-Xeni-app-office-.jpeg',
      alt: 'Eddie at the Xeni App office in New York City',
      caption: 'Xeni App office, New York City',
    },
    {
      src: '/me_in_hungary.jpeg',
      alt: 'Eddie exploring the Párisi Udvar in Budapest, Hungary',
      caption: 'Exploring Budapest, Hungary',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Business Experience' },
    { number: '8', label: 'Production Projects' },
    { number: '20+', label: 'Technologies & Tools' },
  ];

  return (
    <SectionContainer id="about" ref={ref}>
      <SectionHeading
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        About <GradientText>Me</GradientText>
      </SectionHeading>

      <AboutContent>
        <StoryColumn
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          <Paragraph>
            After <strong>8 years leading teams in corporate management</strong> and{' '}
            <strong>15 years running my own businesses</strong>, I discovered that my
            true passion was building things with code. That journey — from boardrooms
            to startups to software engineering — gives me a perspective most
            developers simply don't have.
          </Paragraph>
          <Paragraph>
            I understand the business side. I understand the user. And I know how to
            build software that delivers real results. Today, I specialize in modern
            web applications with React, TypeScript, Node.js, and AI integration.
          </Paragraph>
          <Paragraph>
            Outside of code, I compete in auto racing, motorcycle racing, rock
            climbing, and Muay Thai kickboxing. The same drive that takes me to the{' '}
            <strong>Nürburgring in a GT86</strong> is what I bring to every project —
            relentless focus and a refusal to settle for anything less than
            exceptional.
          </Paragraph>
        </StoryColumn>

        <FeaturedImage
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          <img
            src="/gt86nurburgring.jpeg"
            alt="Eddie racing a GT86 at the Nürburgring in Germany"
            loading="lazy"
          />
        </FeaturedImage>
      </AboutContent>

      <PhotoGrid>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3 + index * 0.5}
          >
            <PhotoCard>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </PhotoCard>
            <PhotoCaption>{photo.caption}</PhotoCaption>
          </motion.div>
        ))}
      </PhotoGrid>

      <StatsRow
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={5}
      >
        {stats.map((stat) => (
          <StatBlock key={stat.label}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatBlock>
        ))}
      </StatsRow>
    </SectionContainer>
  );
};
