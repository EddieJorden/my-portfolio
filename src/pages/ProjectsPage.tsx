import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 5rem);
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FilterBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)<{ $active: boolean }>`
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: 2px solid ${props => props.$active ? '#0096ff' : 'rgba(255, 255, 255, 0.2)'};
  background: ${props => props.$active ? 'linear-gradient(135deg, #0096ff 0%, #0066cc 100%)' : 'transparent'};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0096ff;
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;



const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #0096ff;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(0, 150, 255, 0.2);
  border-radius: 15px;
  font-size: 0.85rem;
  color: #5dbaff;
  border: 1px solid rgba(0, 150, 255, 0.3);
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 150, 255, 0.4);
  }
`;

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Full-Stack', 'Frontend', 'Infrastructure'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </PageTitle>

      <FilterBar
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {categories.map(category => (
          <FilterButton
            key={category}
            $active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </FilterButton>
        ))}
      </FilterBar>

      <ProjectsGrid
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onClick={() => navigate(`/projects/${project.slug}`)}
                style={{ cursor: 'pointer' }}
              >
                <ProjectImage>
                  {project.image && <img src={project.image} alt={project.title} />}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.tech.map((tech, i) => (
                      <TechBadge key={i}>{tech}</TechBadge>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {project.liveUrl && (
                      <LinkButton
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={12} /> Live Demo
                      </LinkButton>
                    )}
                    {project.githubUrl && (
                      <LinkButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub size={12} /> GitHub
                      </LinkButton>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </PageContainer>
  );
};

export default ProjectsPage;
