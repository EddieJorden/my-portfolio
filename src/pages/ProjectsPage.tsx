import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

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
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
  height: 450px;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div<{ $image: string }>`
  width: 100%;
  height: 250px;
  background: url(${props => props.$image}) center/cover;
  position: relative;
  overflow: hidden;

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
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechBadge = styled.span`
  padding: 0.3rem 0.8rem;
  background: rgba(0, 150, 255, 0.2);
  border-radius: 15px;
  font-size: 0.85rem;
  color: #a0aeff;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const LinkButton = styled(motion.a)`
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 150, 255, 0.4);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise CRM System',
    description: 'Full-featured CRM with work orders, invoicing, customer management, and real-time notifications.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    tech: ['React', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase'],
    category: 'Full-Stack'
  },
  {
    id: 2,
    title: 'Kanban Board',
    description: 'Real-time collaborative task management board with drag-and-drop, status tracking, and persistent storage on Fly.io.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    tech: ['React', 'Node.js', 'Express', 'Fly.io'],
    category: 'Full-Stack',
    liveUrl: 'https://kanban-server.fly.dev',
    githubUrl: 'https://github.com/arlo-e-dev/eddie-kanban'
  },
  {
    id: 3,
    title: 'AI Assistant OpenClaw',
    description: 'Personal AI development assistant with GitHub integration, Slack connectivity, and automated workflow management.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    tech: ['Node.js', 'Claude API', 'Slack API', 'GitHub API'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/openclaw/openclaw'
  },
  {
    id: 4,
    title: 'Interactive Portfolio',
    description: 'Modern portfolio website with 3D animations, smooth scroll effects, and responsive design showcasing React expertise.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    tech: ['React', 'Three.js', 'Framer Motion', 'TypeScript', 'Styled Components'],
    category: 'Frontend'
  }
];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Full-Stack', 'Frontend', 'AI/ML'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectImage $image={project.image} />
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </LinkButton>
                  )}
                  {project.githubUrl && (
                    <LinkButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
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
