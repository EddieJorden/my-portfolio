import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiZap,
  FiServer,
  FiTrendingUp,
} from 'react-icons/fi';
import { GlassCard, GradientText } from '../shared/GlassCard';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(GlassCard)`
  padding: 2.5rem;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled.li`
  padding: 0.5rem 1rem;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(99, 102, 241, 0.1)'
      : 'rgba(129, 140, 248, 0.1)'
  };
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.875rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertise = [
    {
      icon: <FiCode />,
      title: 'Modern Web Development',
      description:
        'Building scalable, performant web applications with cutting-edge technologies and best practices.',
      technologies: ['React 18', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    },
    {
      icon: <FiCpu />,
      title: 'AI/LLM Integration',
      description:
        'Integrating intelligent systems and language models to create smart, context-aware applications.',
      technologies: ['LLM APIs', 'Prompt Engineering', 'RAG Systems', 'Vector DBs', 'AI Workflows'],
    },
    {
      icon: <FiLayers />,
      title: 'Multi-Agent Systems',
      description:
        'Architecting complex systems with multiple autonomous agents working together seamlessly.',
      technologies: ['Agent Design', 'Task Orchestration', 'State Management', 'Event Systems'],
    },
    {
      icon: <FiZap />,
      title: 'Real-Time Applications',
      description:
        'Creating responsive, live applications with instant data updates and seamless user experiences.',
      technologies: ['WebSockets', 'Server-Sent Events', 'Real-time APIs', 'State Sync'],
    },
    {
      icon: <FiServer />,
      title: 'API Design & Architecture',
      description:
        'Designing robust, scalable APIs and system architectures that grow with your business.',
      technologies: ['REST', 'GraphQL', 'Microservices', 'API Gateway', 'Authentication'],
    },
    {
      icon: <FiTrendingUp />,
      title: 'Performance & Optimization',
      description:
        'Optimizing applications for speed, efficiency, and exceptional user experience.',
      technologies: ['Code Splitting', 'Lazy Loading', 'Caching', 'CDN', 'Performance Monitoring'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Areas of <GradientText>Expertise</GradientText>
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SkillsGrid>
          {expertise.map((skill, index) => (
            <SkillCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <IconWrapper>{skill.icon}</IconWrapper>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <TechList>
                {skill.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </motion.div>
    </SkillsSection>
  );
};
