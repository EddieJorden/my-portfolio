import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { GlassCard, GradientText } from '../shared/GlassCard';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(GlassCard)`
  position: relative;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
`;

const ProjectImage = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 240px;
  background: ${({ $bgColor }) => $bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.375rem 0.875rem;
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
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  bgColor: string;
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com/EddieJorden',
      demo: '#',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'AI Chat Assistant',
      description:
        'Intelligent chat application leveraging LLM APIs for natural conversations with context awareness and multi-turn dialogue support.',
      technologies: ['React', 'TypeScript', 'LLM APIs', 'WebSockets', 'MongoDB'],
      github: 'https://github.com/EddieJorden',
      demo: '#',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'Real-Time Collaboration Tool',
      description:
        'Collaborative workspace with live updates, real-time cursors, and synchronized state management for team productivity.',
      technologies: ['Next.js', 'WebSockets', 'Redis', 'Tailwind', 'Prisma'],
      github: 'https://github.com/EddieJorden',
      demo: '#',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'Task Automation System',
      description:
        'Multi-agent task automation platform with intelligent workflow orchestration and seamless third-party integrations.',
      technologies: ['React', 'Python', 'FastAPI', 'Docker', 'AWS'],
      github: 'https://github.com/EddieJorden',
      demo: '#',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Comprehensive analytics platform with real-time data visualization, custom reports, and predictive insights.',
      technologies: ['React', 'D3.js', 'GraphQL', 'Node.js', 'TimescaleDB'],
      github: 'https://github.com/EddieJorden',
      demo: '#',
      bgColor: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    },
    {
      title: 'API Gateway Service',
      description:
        'Scalable API gateway with rate limiting, authentication, request transformation, and comprehensive monitoring.',
      technologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/EddieJorden',
      demo: '#',
      bgColor: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
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
    <ProjectsSection id="projects" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Featured <GradientText>Projects</GradientText>
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <ProjectImage $bgColor={project.bgColor}>
                {/* Gradient placeholder - can be replaced with actual images */}
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechStack>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>

                <ProjectLinks>
                  {project.github && (
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub /> Code
                    </ProjectLink>
                  )}
                  {project.demo && (
                    <ProjectLink
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'transparent',
                        color: 'inherit',
                        border: '2px solid',
                      }}
                    >
                      <FiExternalLink /> Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </ProjectsSection>
  );
};
