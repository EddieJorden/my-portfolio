import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(240, 147, 251, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 20%, rgba(118, 75, 162, 0.3) 0%, transparent 50%);
    animation: pulse 8s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(255, 255, 255, 0.03) 2px,
      rgba(255, 255, 255, 0.03) 4px
    );
    animation: moveGrid 20s linear infinite;
  }

  @keyframes moveGrid {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
`;

const FloatingOrbs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  .orb {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
    filter: blur(40px);
    animation: float 20s ease-in-out infinite;

    &:nth-child(1) {
      width: 300px;
      height: 300px;
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }

    &:nth-child(2) {
      width: 400px;
      height: 400px;
      top: 60%;
      right: 10%;
      animation-delay: -7s;
    }

    &:nth-child(3) {
      width: 250px;
      height: 250px;
      bottom: 10%;
      left: 50%;
      animation-delay: -14s;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-30px, 30px) scale(0.9);
    }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 2rem;
  max-width: 1200px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;

const CTAButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  cursor: pointer;
  margin: 0 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  }
`;

const ScrollSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  background: linear-gradient(180deg, rgba(10, 10, 30, 0) 0%, rgba(10, 10, 30, 1) 100%);
`;

const FeatureGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const features = [
    {
      title: '🎨 Creative Design',
      description: 'Bringing ideas to life with modern, responsive designs that captivate and engage users.',
    },
    {
      title: '⚡ Performance',
      description: 'Optimized applications that load fast and run smoothly across all devices.',
    },
    {
      title: '🚀 Scalability',
      description: 'Building solutions that grow with your business needs and handle increasing demands.',
    },
  ];

  return (
    <div ref={ref}>
      <HeroSection>
        <AnimatedBackground />
        <FloatingOrbs>
          <div className="orb" />
          <div className="orb" />
          <div className="orb" />
        </FloatingOrbs>

        <HeroContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeroTitle
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Eddie Moger
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Full-Stack Developer | Audiology Tech Innovator | Problem Solver
          </HeroSubtitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <CTAButton
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </CTAButton>
            <CTAButton
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </CTAButton>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <ScrollSection>
        <FeatureGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </ScrollSection>
    </div>
  );
};

export default LandingPage;
