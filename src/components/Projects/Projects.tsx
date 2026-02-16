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

const ProjectImage = styled.div`
  width: 100%;
  height: 240px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
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
  name: string;
  thumbnail: string;
  altText: string;
  link: string;
  notes: {
    notes: string;
  };
  github?: string;
  technologies?: string[];
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      name: 'Full Stack Task Manager App',
      thumbnail: 'Task-app-thumbnail.png',
      altText: 'Full Stack Task Manager App',
      link: 'https://eddies-balance-app.netlify.app/',
      notes: {
        notes: 'This is a full stack task manager app built using React, Redux, Typescript, Node.js, Express.js, and MySQL.',
      },
      github: 'https://github.com/EddieJorden/balance-app',
      technologies: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    },
    {
      name: 'SimpleSpectra.com',
      thumbnail: 'SimpleSpectra.com-thumbnail.png',
      altText: 'SimpleSpectra.com thumbnail',
      link: 'https://simplespectra.com/',
      notes: {
        notes: 'E-commerce site (currently in development)',
      },
      technologies: ['React', 'E-commerce', 'Full Stack'],
    },
    {
      name: 'Data Visualization',
      thumbnail: 'Data-viz.png',
      altText: 'Data Visualization with D3 thumbnail',
      link: 'https://eddiejorden.github.io/ui-ux-project/',
      notes: {
        notes: 'A data visualization component built using D3.js with React, Redux and Express.js.',
      },
      github: 'https://github.com/EddieJorden/ui-ux-project',
      technologies: ['D3.js', 'React', 'Redux', 'Express'],
    },
    {
      name: 'Customer Directory',
      thumbnail: 'Customer-directory.png',
      altText: 'React-Redux-Challenge-project',
      link: 'https://eddiejorden.github.io/ctw-project/',
      notes: {
        notes: 'A React Redux application that renders 1000 input fields, using React memo and useCallback to optimize performance',
      },
      github: 'https://github.com/EddieJorden/ctw-project',
      technologies: ['React', 'Redux', 'Performance Optimization'],
    },
    {
      name: 'Reddit Clone',
      thumbnail: 'reddit_clone_thumbnail.png',
      altText: 'reddit-clone',
      link: 'https://eddiejorden.github.io/reddit-clone/',
      notes: {
        notes: 'A Simple Reddit Clone using reddit API in a React, Redux app.',
      },
      github: 'https://github.com/EddieJorden/reddit-clone',
      technologies: ['React', 'Redux', 'API Integration'],
    },
    {
      name: 'Flash Card Tests',
      thumbnail: 'flashcards-thumbnail.png',
      altText: 'Flash Cards App',
      link: 'https://eddiejorden.github.io/flashcards/',
      notes: {
        notes: 'This custom Flash Cards app was built using React with Redux. It allows you to put in topics and make flashcard quizzes.',
      },
      github: 'https://github.com/EddieJorden/flashcards',
      technologies: ['React', 'Redux', 'Education'],
    },
    {
      name: 'My Planner',
      thumbnail: 'appointment-planner-thumbnail.png',
      altText: 'appointment-planner-thumbnail',
      link: 'https://eddiejorden.github.io/react_challenge/',
      notes: {
        notes: 'Contacts and appointments component built using React.',
      },
      github: 'https://github.com/EddieJorden/react_challenge',
      technologies: ['React', 'Scheduling'],
    },
    {
      name: 'Food Near Me',
      thumbnail: 'food_near_me_thumbnail.png',
      altText: 'food-near-me-thumbnail',
      link: 'https://eddiejorden.github.io/food.near.me/',
      notes: {
        notes: 'This is a React app built using the Yelp API to find restaurants near you.',
      },
      github: 'https://github.com/EddieJorden/food.near.me',
      technologies: ['React', 'Yelp API', 'Geolocation'],
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
              <ProjectImage>
                <img
                  src={`/${project.thumbnail}`}
                  alt={project.altText}
                />
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>{project.notes.notes}</ProjectDescription>

                {project.technologies && (
                  <TechStack>
                    {project.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                )}

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
                  {project.link && (
                    <ProjectLink
                      href={project.link}
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
