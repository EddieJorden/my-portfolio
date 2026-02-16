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
import {
  SectionContainer,
  SectionHeading,
  SectionSubheading,
  GradientText,
} from '../shared/GlassCard';

const HeaderBlock = styled.div`
  margin-bottom: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled(motion.div)`
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceOne};
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const IconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.gradients.subtle};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.625rem;
  letter-spacing: -0.02em;
`;

const CardDescription = styled.p`
  font-size: 0.925rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.25rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.65rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.gradients.subtle};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.01em;
`;

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const expertise = [
    {
      icon: <FiCode />,
      title: 'Modern Web Development',
      description:
        'Scalable, performant web applications built with cutting-edge technologies and clean architecture.',
      tags: ['React 18', 'Next.js', 'TypeScript', 'Redux', 'Tailwind'],
    },
    {
      icon: <FiCpu />,
      title: 'AI & LLM Integration',
      description:
        'Intelligent systems that leverage language models for smart, context-aware applications.',
      tags: ['LLM APIs', 'Prompt Engineering', 'RAG', 'Vector DBs'],
    },
    {
      icon: <FiLayers />,
      title: 'Full-Stack Architecture',
      description:
        'End-to-end systems with robust backends, clean APIs, and seamless frontend experiences.',
      tags: ['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      icon: <FiZap />,
      title: 'Real-Time Applications',
      description:
        'Live, responsive applications with instant data updates and seamless user interaction.',
      tags: ['WebSockets', 'SSE', 'Real-time APIs', 'State Sync'],
    },
    {
      icon: <FiServer />,
      title: 'API Design & DevOps',
      description:
        'Robust API architectures, containerized deployments, and scalable cloud infrastructure.',
      tags: ['REST', 'GraphQL', 'Docker', 'AWS', 'CI/CD'],
    },
    {
      icon: <FiTrendingUp />,
      title: 'Data & Visualization',
      description:
        'Turning complex datasets into clear, interactive visual stories that drive decisions.',
      tags: ['D3.js', 'Data Analysis', 'Dashboards', 'Financial Sims'],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <SectionContainer id="skills" ref={ref}>
      <HeaderBlock>
        <SectionHeading
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Areas of <GradientText>Expertise</GradientText>
        </SectionHeading>
        <SectionSubheading
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Technologies and capabilities I bring to every project.
        </SectionSubheading>
      </HeaderBlock>

      <Grid>
        {expertise.map((item, index) => (
          <ExpertiseCard
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2 + index}
          >
            <IconWrap>{item.icon}</IconWrap>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <TagRow>
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagRow>
          </ExpertiseCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};
