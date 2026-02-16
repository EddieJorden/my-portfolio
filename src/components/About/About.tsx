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
    'Node.js',
    'Express',
    'Redux',
    'Next.js',
    'D3.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'API Design',
    'AI/LLM Integration',
    'JavaScript',
    'Git',
  ];

  const stats = [
    { number: '15+', label: 'Years Business Experience' },
    { number: '30+', label: 'Projects Completed' },
    { number: '20+', label: 'Technologies' },
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
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
            Welcome to my corner of the internet!
          </h3>
          <p>
            My name is Eddie and I am a software developer and entrepreneur with a passion 
            for building innovative solutions. I have an extensive background in automotive 
            racing, specializing in chassis tuning, and a background in PC building, including 
            hardware assembly, overclocking, and using aftermarket software.
          </p>
          <p>
            My true passion lies in software development, where I have been known to create 
            solutions for small businesses including integrating AI and machine learning, fully 
            custom CRMs, internal communications, websites, SEO, e-commerce, custom back-end 
            software, financial simulations, data visualization, encryption and much more.
          </p>
          <p>
            I have a passion for dynamic programming and problem-solving. I spent 8 years in 
            corporate management before starting my own business, which I ran with great success 
            for 15 years before deciding to switch to something I am more passionate about - 
            software development.
          </p>
          <p>
            I have competed in auto racing, motorcycle racing, rock climbing, downhill mountain 
            bike racing, Muay Thai Kickboxing and much more. I believe that my passion for these 
            activities translates into my work ethic - I am always pushing myself to be the best 
            and constantly seeking new challenges.
          </p>
        </AboutText>

        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/gt86nurburgring.jpeg" alt="Eddie Moger racing cars on the world famous Nurburgring in Germany" />
        </ImageContainer>
      </AboutGrid>

      {/* Additional Images Section */}
      <AboutGrid style={{ marginTop: '3rem' }}>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/New-startup-office.jpeg" alt="Eddie Moger in his new office at Biirdee Travel" />
        </ImageContainer>

        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/Monday-Meeting-Biirdee.com-office-burlingame-ca.jpeg" alt="Eddie Moger enjoying a monday morning brainstorming session at Biirdee Travel" />
        </ImageContainer>
      </AboutGrid>

      <AboutGrid style={{ marginTop: '3rem', marginBottom: '4rem' }}>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src="/New-York-Xeni-app-office-.jpeg" alt="Eddie Moger at Xeni app office in New York" />
        </ImageContainer>

        <AboutText
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            So, why should you choose me for your next project? Well, I am a nerd at heart 
            and love solving problems. My skills are not just tools, they are the tools I use 
            for success. I am excited to work on new projects and help build your dreams.
          </p>
          <p>
            Whether you're looking for a new website, custom software, or just someone to 
            bounce ideas off of, I am here for you. Let's make something great together!
          </p>
        </AboutText>
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
