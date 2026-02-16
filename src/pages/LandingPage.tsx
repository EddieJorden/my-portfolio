import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #0a0e27 0%, #162447 25%, #1f4068 50%, #162447 75%, #0a0e27 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 20s ease infinite;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Particle = styled.div<{ delay: number; duration: number; left: string; size: string }>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  background: radial-gradient(circle, rgba(0, 180, 255, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  left: ${props => props.left};
  bottom: -50px;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  filter: blur(2px);
  opacity: 0.6;
`;

const GlowOrb = styled.div<{ top: string; left: string; size: string; delay: number }>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top};
  left: ${props => props.left};
  background: radial-gradient(circle, rgba(0, 200, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 1200px;
  width: 100%;
`;

const Greeting = styled(motion.div)`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: #00b4ff;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #00b4ff 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  letter-spacing: -2px;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const CTAButton = styled(motion.button)<{ $primary?: boolean }>`
  background: ${props => props.$primary 
    ? 'linear-gradient(135deg, #0096ff 0%, #0066cc 100%)' 
    : 'transparent'};
  border: 2px solid #0096ff;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: ${props => props.$primary 
    ? '0 10px 40px rgba(0, 150, 255, 0.4)' 
    : '0 5px 20px rgba(0, 150, 255, 0.2)'};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 60px rgba(0, 150, 255, 0.6);
  }

  span {
    position: relative;
    z-index: 1;
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
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

const ScrollArrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 2px solid #0096ff;
  border-bottom: 2px solid #0096ff;
  transform: rotate(-45deg);
  animation: ${float} 2s ease-in-out infinite;
`;

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
`;

const StatCard = styled(motion.div)`
  h3 {
    font-size: 3rem;
    color: #00b4ff;
    margin-bottom: 0.5rem;
    font-weight: 900;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    left: `${Math.random() * 100}%`,
    size: `${10 + Math.random() * 30}px`,
  }));

  const orbs = [
    { top: '10%', left: '10%', size: '400px', delay: 0 },
    { top: '60%', left: '80%', size: '500px', delay: 2 },
    { top: '30%', left: '50%', size: '350px', delay: 4 },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Available' },
  ];

  return (
    <>
      <HeroSection>
        <ParticlesContainer>
          {particles.map(particle => (
            <Particle
              key={particle.id}
              delay={particle.delay}
              duration={particle.duration}
              left={particle.left}
              size={particle.size}
            />
          ))}
          {orbs.map((orb, i) => (
            <GlowOrb
              key={i}
              top={orb.top}
              left={orb.left}
              size={orb.size}
              delay={orb.delay}
            />
          ))}
        </ParticlesContainer>

        <HeroContent>
          <Greeting
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </Greeting>

          <HeroTitle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Eddie Moger
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Full-Stack Developer | React Specialist | Creative Problem Solver
          </HeroSubtitle>

          <CTAContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CTAButton
              $primary
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
            </CTAButton>
            <CTAButton
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
            </CTAButton>
          </CTAContainer>
        </HeroContent>

        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span>Scroll Down</span>
          <ScrollArrow />
        </ScrollIndicator>
      </HeroSection>

      <StatsSection>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsSection>
    </>
  );
};

export default LandingPage;
