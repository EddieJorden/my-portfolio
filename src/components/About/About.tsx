import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GlassCard, GradientText } from '../shared/GlassCard';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  height: 400px;
  background: ${({ theme }) => theme.gradients.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: overlay;
    opacity: 0.8;
    transition: ${({ theme }) => theme.transitions.medium};
  }

  &:hover img {
    opacity: 1;
    mix-blend-mode: normal;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StatCard = styled(GlassCard)`
  text-align: center;
  padding: 2rem;

  h3 {
    font-size: 3rem;
    font-weight: 800;
    background: ${({ theme }) => theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(30, 41, 59, 0.7)'
  };
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 1.5rem;
  text-align: center;
  transition: ${({ theme }) => theme.transitions.medium};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.glow};

    p {
      color: white;
    }
  }

  p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }
`;

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Python',
    'JavaScript',
    'Redux',
    'GraphQL',
    'REST APIs',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Git',
    'CI/CD',
    'Agile',
  ];

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About <GradientText>Me</GradientText>
      </SectionTitle>

      <AboutGrid>
        <AboutText
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a passionate software engineer based in Silicon Valley, specializing
            in building exceptional digital experiences. With a strong foundation in
            modern web development, I create solutions that are both beautiful and
            functional.
          </p>
          <p>
            My expertise spans full-stack development with a focus on React ecosystems,
            TypeScript, and modern JavaScript frameworks. I'm particularly interested
            in AI/LLM integration, multi-agent systems, and real-time applications that
            push the boundaries of what's possible.
          </p>
          <p>
            I believe in writing clean, maintainable code and following best practices.
            Whether it's architecting scalable APIs, implementing complex UI interactions,
            or optimizing performance, I approach every challenge with enthusiasm and
            attention to detail.
          </p>
        </AboutText>

        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/EddieInTheCity.jpg" alt="Eddie Moger" />
        </ImageContainer>
      </AboutGrid>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatCard>
          ))}
        </StatsGrid>

        <SkillsContainer>
          <SectionTitle
            as="h3"
            style={{ fontSize: '2rem', marginBottom: '2rem' }}
          >
            Core <GradientText>Technologies</GradientText>
          </SectionTitle>
          <SkillsGrid>
            {skills.map((skill) => (
              <SkillCard
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <p>{skill}</p>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </motion.div>
    </AboutSection>
  );
};
