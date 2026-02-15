import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { GlassButton, GradientText } from '../shared/GlassCard';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(30, 41, 59, 0.7)'
  };
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    color: white;
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Title variants={itemVariants}>
            Hi, I'm <GradientText>Eddie Moger</GradientText>
          </Title>

          <Subtitle variants={itemVariants}>
            Senior Software Engineer & AI Systems Architect
          </Subtitle>

          <Description variants={itemVariants}>
            I build exceptional digital experiences with modern web technologies,
            AI/LLM integration, and scalable architectures. Specializing in React,
            TypeScript, and real-time applications that solve complex problems.
          </Description>

          <ButtonGroup variants={itemVariants}>
            <GlassButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </GlassButton>
            <GlassButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              style={{
                background: 'transparent',
                border: '2px solid',
                borderImage: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%) 1',
              }}
            >
              Get In Touch
            </GlassButton>
          </ButtonGroup>

          <SocialLinks variants={itemVariants}>
            <SocialIcon
              href="https://github.com/EddieJorden"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/eddie-moger/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </SocialIcon>
            <SocialIcon
              href="mailto:Eddie@EddieMoger.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail />
            </SocialIcon>
          </SocialLinks>
        </motion.div>
      </HeroContent>

      <ScrollIndicator
        onClick={() => scrollToSection('about')}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ScrollText>Scroll</ScrollText>
        <FiArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};
