import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-30px) rotate(3deg); }
  66% { transform: translateY(-15px) rotate(-3deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

const PageWrapper = styled.div`
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #0f1b2e 50%, #1a1f3a 75%, #0a0e27 100%);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const GeometricShape = styled(motion.div)<{ $size: number; $delay: number; $top: string; $left: string }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  top: ${props => props.$top};
  left: ${props => props.$left};
  border: 2px solid rgba(0, 180, 255, 0.3);
  animation: ${float} ${props => 10 + props.$delay}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  
  &:nth-child(odd) {
    border-radius: 50%;
  }
`;

const GlowingOrb = styled(motion.div)<{ $size: number; $x: string; $y: string }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  left: ${props => props.$x};
  top: ${props => props.$y};
  background: radial-gradient(circle, rgba(0, 200, 255, 0.4) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  animation: ${pulse} 4s ease-in-out infinite;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 150, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 150, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.3;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1000px;
`;

const TopLine = styled(motion.div)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #00d4ff;
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(4rem, 12vw, 9rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 0.9;
  letter-spacing: -4px;
  background: linear-gradient(135deg, #fff 0%, #00d4ff 50%, #fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 80px rgba(0, 212, 255, 0.3);
  filter: drop-shadow(0 5px 30px rgba(0, 212, 255, 0.5));
`;

const TypedText = styled.div`
  font-size: clamp(1.5rem, 3.5vw, 3rem);
  color: #fff;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  font-weight: 500;
  
  .typed {
    color: #00d4ff;
    font-weight: 700;
  }
`;

const CTASection = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const PrimaryButton = styled(motion.button)`
  background: linear-gradient(135deg, #00d4ff 0%, #0096ff 100%);
  border: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.5rem 3.5rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 50px rgba(0, 212, 255, 0.4);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    0% { transform: translateX(-100%) rotate(45deg); }
    100% { transform: translateX(100%) rotate(45deg); }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 60px rgba(0, 212, 255, 0.6);
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  border: 3px solid #00d4ff;
  color: #00d4ff;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.5rem 3.5rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 5px 30px rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(0, 212, 255, 0.4);
  }
`;

const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 1.5rem;
  }

  .text {
    font-size: 0.9rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .arrow {
    width: 2px;
    height: 40px;
    background: linear-gradient(180deg, transparent, #00d4ff);
    position: relative;
    animation: ${float} 2s ease-in-out infinite;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 10px;
      height: 10px;
      border-right: 2px solid #00d4ff;
      border-bottom: 2px solid #00d4ff;
      transform: translateX(-50%) rotate(45deg);
    }
  }
`;

const StatsBar = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  padding: 3rem 2rem;
  border-top: 1px solid rgba(0, 212, 255, 0.2);
`;

const StatsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;

  .number {
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, #00d4ff 0%, #0096ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }

  .label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const shapes = [
    { size: 300, delay: 0, top: '10%', left: '10%' },
    { size: 200, delay: 1, top: '20%', left: '80%' },
    { size: 250, delay: 2, top: '70%', left: '15%' },
    { size: 180, delay: 1.5, top: '60%', left: '75%' },
    { size: 220, delay: 0.5, top: '40%', left: '50%' },
  ];

  const orbs = [
    { size: 500, x: '10%', y: '20%' },
    { size: 600, x: '80%', y: '60%' },
    { size: 400, x: '50%', y: '10%' },
  ];

  const stats = [
    { number: '11+', label: 'Projects' },
    { number: '10+', label: 'Years' },
    { number: '100%', label: 'Satisfaction' },
    { number: '∞', label: 'Creativity' },
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <AnimatedBackground>
          <GridOverlay />
          {shapes.map((shape, i) => (
            <GeometricShape
              key={i}
              $size={shape.size}
              $delay={shape.delay}
              $top={shape.top}
              $left={shape.left}
            />
          ))}
          {orbs.map((orb, i) => (
            <GlowingOrb key={i} $size={orb.size} $x={orb.x} $y={orb.y} />
          ))}
        </AnimatedBackground>

        <HeroContent>
          <TopLine
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome
          </TopLine>

          <MainTitle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EDDIE
            <br />
            MOGER
          </MainTitle>

          <TypedText>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'React Specialist',
                2000,
                'Problem Solver',
                2000,
                'Code Architect',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typed"
            />
          </TypedText>

          <CTASection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <PrimaryButton
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW PROJECTS
            </PrimaryButton>
            <SecondaryButton
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT ME
            </SecondaryButton>
          </CTASection>
        </HeroContent>

        <ScrollHint
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text">Scroll</span>
          <div className="arrow" />
        </ScrollHint>
      </HeroSection>

      <StatsBar
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <StatsGrid>
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="number">{stat.number}</div>
              <div className="label">{stat.label}</div>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsBar>
    </PageWrapper>
  );
};

export default LandingPage;
