import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
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
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceOne};
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.03);
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const ProjectName = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const ProjectDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.25rem;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
`;

const TechTag = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.25rem 0.6rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.gradients.subtle};
  color: ${({ theme }) => theme.colors.primary};
`;

const LinkRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: ${({ theme }) => theme.transitions.fast};
  padding: 0.5rem 0.875rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.surfaceTwo};
  }

  svg {
    flex-shrink: 0;
  }
`;

const PrimaryLink = styled(ProjectLink)`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: white;
    opacity: 0.9;
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

interface Project {
  name: string;
  thumbnail: string;
  alt: string;
  link: string;
  description: string;
  github?: string;
  technologies: string[];
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const projects: Project[] = [
    {
      name: 'Full-Stack Task Manager',
      thumbnail: 'Task-app-thumbnail.png',
      alt: 'Full-Stack Task Manager Application',
      link: 'https://eddies-balance-app.netlify.app/',
      description:
        'Production task management app built with React, Redux, TypeScript, Node.js, Express, and MySQL. Full CRUD with real-time state management.',
      github: 'https://github.com/EddieJorden/balance-app',
      technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    },
    {
      name: 'SimpleSpectra.com',
      thumbnail: 'SimpleSpectra.com-thumbnail.png',
      alt: 'SimpleSpectra e-commerce website',
      link: 'https://simplespectra.com/',
      description:
        'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Currently in active development.',
      technologies: ['React', 'E-commerce', 'Full Stack'],
    },
    {
      name: 'Data Visualization Dashboard',
      thumbnail: 'Data-viz.png',
      alt: 'Interactive Data Visualization Dashboard',
      link: 'https://eddiejorden.github.io/ui-ux-project/',
      description:
        'Interactive data visualization component built with D3.js, React, Redux, and Express. Transforms complex datasets into clear visual narratives.',
      github: 'https://github.com/EddieJorden/ui-ux-project',
      technologies: ['D3.js', 'React', 'Redux', 'Express'],
    },
    {
      name: 'Customer Directory',
      thumbnail: 'Customer-directory.png',
      alt: 'Performance-optimized Customer Directory',
      link: 'https://eddiejorden.github.io/ctw-project/',
      description:
        'React Redux app rendering 1,000 input fields, using React.memo and useCallback for optimized performance at scale.',
      github: 'https://github.com/EddieJorden/ctw-project',
      technologies: ['React', 'Redux', 'Performance Optimization'],
    },
    {
      name: 'Reddit Clone',
      thumbnail: 'reddit_clone_thumbnail.png',
      alt: 'Reddit Clone Application',
      link: 'https://eddiejorden.github.io/reddit-clone/',
      description:
        'Reddit-style application consuming the Reddit API. Built with React and Redux for clean state management and real-time content.',
      github: 'https://github.com/EddieJorden/reddit-clone',
      technologies: ['React', 'Redux', 'Reddit API'],
    },
    {
      name: 'Flash Card App',
      thumbnail: 'flashcards-thumbnail.png',
      alt: 'Flash Card Quiz Application',
      link: 'https://eddiejorden.github.io/flashcards/',
      description:
        'Custom flashcard quiz platform with topic management and interactive study modes. Built with React and Redux.',
      github: 'https://github.com/EddieJorden/flashcards',
      technologies: ['React', 'Redux', 'Education'],
    },
    {
      name: 'My Planner',
      thumbnail: 'appointment-planner-thumbnail.png',
      alt: 'Appointment Planner Application',
      link: 'https://eddiejorden.github.io/react_challenge/',
      description:
        'Contacts and appointments management tool with clean UX for scheduling and organizing daily tasks.',
      github: 'https://github.com/EddieJorden/react_challenge',
      technologies: ['React', 'Scheduling', 'UI/UX'],
    },
    {
      name: 'Food Near Me',
      thumbnail: 'food_near_me_thumbnail.png',
      alt: 'Food Near Me - Restaurant Finder',
      link: 'https://eddiejorden.github.io/food.near.me/',
      description:
        'Location-aware restaurant finder using the Yelp API. Search, filter, and discover restaurants near any location.',
      github: 'https://github.com/EddieJorden/food.near.me',
      technologies: ['React', 'Yelp API', 'Geolocation'],
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
    <SectionContainer id="projects" ref={ref}>
      <HeaderBlock>
        <SectionHeading
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Featured <GradientText>Projects</GradientText>
        </SectionHeading>
        <SectionSubheading
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Real applications built to solve real problems.
        </SectionSubheading>
      </HeaderBlock>

      <Grid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2 + index}
          >
            <Thumbnail>
              <img
                src={`/${project.thumbnail}`}
                alt={project.alt}
                loading="lazy"
              />
            </Thumbnail>

            <CardBody>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>

              <TechRow>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechRow>

              <LinkRow>
                {project.link && (
                  <PrimaryLink
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </PrimaryLink>
                )}
                {project.github && (
                  <ProjectLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub size={14} /> Source
                  </ProjectLink>
                )}
              </LinkRow>
            </CardBody>
          </ProjectCard>
        ))}
      </Grid>
    </SectionContainer>
  );
};
