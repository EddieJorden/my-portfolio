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

const ProjectImage = styled.div<{ $image?: string }>`
  width: 100%;
  height: 220px;
  background: ${props => props.$image 
    ? `url(${props.$image}) center/cover` 
    : 'linear-gradient(135deg, #0096ff 0%, #0066cc 100%)'};
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

const LinkButton = styled(motion.a)`
  padding: 0.6rem 1.5rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  border-radius: 25px;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 150, 255, 0.4);
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 17,
    title: 'Preba — Premium Bathroom Access App',
    description: 'Startup landing page for Preba (Premium Bathroom), an app that gives users instant access to verified, rated public restrooms via business-hosted access codes. Features sections for users, business owners, and investors — with pricing tiers, trust/ratings system, live map mockup, and business revenue dashboard. Built with React + Vite, deployed on Vercel.',
    tech: ['React', 'Vite', 'CSS Modules', 'React Router', 'Vercel'],
    category: 'Full-Stack',
    liveUrl: 'https://privy-landing.vercel.app',
    githubUrl: 'https://github.com/arlo-e-dev/preba-landing',
    image: '/preba-thumbnail.jpg'
  },
  {
    id: 16,
    title: 'RateSwipe — Mortgage Marketplace',
    description: 'Tinder-style mortgage shopping app where buyers swipe through broker offers and brokers compete for leads. Features a full buyer swipe UI, broker dashboard, subscription gate, match flow, and dark mode. Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel'],
    category: 'Full-Stack',
    liveUrl: 'https://rateswipe.vercel.app',
    githubUrl: 'https://github.com/arlo-e-dev/rateswipe',
    image: '/rateswipe-thumbnail.jpg'
  },
  {
    id: 15,
    title: 'SwingBy — Startup Landing Page',
    description: 'Investor-grade landing page for SwingBy, an AI-powered crowdsourced parcel pickup startup. Multi-audience sections for investors, drivers, and shippers — with real market data, dynamic pricing tiers, full business model page with unit economics, and contextual sign-up flows. Built with React + Vite, deployed on Vercel.',
    tech: ['React', 'Vite', 'CSS Modules', 'React Router', 'Vercel'],
    category: 'Full-Stack',
    liveUrl: 'https://swingby-landing.vercel.app',
    githubUrl: 'https://github.com/arlo-e-dev/swingby-landing',
    image: '/swingby-thumbnail.jpg'
  },
  {
    id: 1,
    title: 'Full Stack Task Manager',
    description: 'Complete task management application built with React, Redux, TypeScript, Node.js, Express, and MySQL. Features user authentication, task CRUD operations, and real-time updates.',
    tech: ['React', 'Redux', 'TypeScript', 'Node.js', 'Express', 'MySQL'],
    category: 'Full-Stack',
    liveUrl: 'https://eddies-balance-app.netlify.app/',
    githubUrl: 'https://github.com/EddieJorden/balance-app',
    image: '/Task-app-thumbnail.png'
  },
  {
    id: 2,
    title: 'SimpleSpectra.com',
    description: 'E-commerce platform currently in development. Built with modern web technologies to provide seamless shopping experience.',
    tech: ['React', 'Node.js', 'E-Commerce'],
    category: 'Full-Stack',
    liveUrl: 'https://simplespectra.com/',
    image: '/SimpleSpectra.com-thumbnail.png'
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'Interactive data visualization component using D3.js. Built with React, Redux, and Express to display complex data in intuitive visual formats.',
    tech: ['React', 'Redux', 'D3.js', 'Express'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/ui-ux-project/',
    githubUrl: 'https://github.com/EddieJorden/ui-ux-project',
    image: '/Data-viz.png'
  },
  {
    id: 4,
    title: 'Optimized Customer Directory',
    description: 'High-performance React Redux application rendering 1000+ input fields. Optimized using React.memo and useCallback for maximum performance.',
    tech: ['React', 'Redux', 'Performance Optimization'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/ctw-project/',
    githubUrl: 'https://github.com/EddieJorden/ctw-project',
    image: '/Customer-directory.png'
  },
  {
    id: 5,
    title: 'Reddit Clone',
    description: 'Fully functional Reddit clone using the official Reddit API. Built with React and Redux for state management.',
    tech: ['React', 'Redux', 'REST API'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/reddit-clone/',
    githubUrl: 'https://github.com/EddieJorden/reddit-clone',
    image: '/reddit_clone_thumbnail.png'
  },
  {
    id: 6,
    title: 'Flash Card Study App',
    description: 'Custom flashcard application for creating and studying topics with quiz functionality. Built with React and Redux.',
    tech: ['React', 'Redux'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/flashcards/',
    githubUrl: 'https://github.com/EddieJorden/flashcards',
    image: '/flashcards-thumbnail.png'
  },
  {
    id: 7,
    title: 'Fotomatic Responsive Site',
    description: 'Pixel-perfect responsive website built to exact designer specifications using modern CSS flexbox techniques.',
    tech: ['HTML', 'CSS', 'Flexbox', 'Responsive Design'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/fotomatic/',
    githubUrl: 'https://github.com/EddieJorden/fotomatic',
    image: '/fotomatic-thumbnail.png'
  },
  {
    id: 8,
    title: 'Appointment Planner',
    description: 'Contact and appointment management system built with React. Features contact organization and scheduling.',
    tech: ['React'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/react_challenge/',
    githubUrl: 'https://github.com/EddieJorden/react_challenge',
    image: '/appointment-planner-thumbnail.png'
  },
  {
    id: 9,
    title: 'Food Near Me',
    description: 'Restaurant finder using the Yelp API. Search for restaurants by location with detailed information and reviews.',
    tech: ['React', 'Yelp API'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/food.near.me/',
    githubUrl: 'https://github.com/EddieJorden/food.near.me',
    image: '/food_near_me_thumbnail.png'
  },
  {
    id: 10,
    title: 'My Jams - Spotify Playlist Manager',
    description: 'Spotify playlist creator using the Spotify API. Create and manage playlists, search tracks, and add songs to existing playlists.',
    tech: ['React', 'Spotify API', 'OAuth'],
    category: 'Frontend',
    liveUrl: 'https://eddiejorden.github.io/my-jams',
    githubUrl: 'https://github.com/EddieJorden/my-jams',
    image: '/myJams-thumbnail.png'
  },
  {
    id: 11,
    title: 'Developer Portfolio',
    description: 'Custom-built responsive portfolio showcasing projects and skills. Built from scratch using React.js and Express.',
    tech: ['React', 'Express', 'Responsive Design'],
    category: 'Full-Stack',
    liveUrl: 'https://eddiemoger.com',
    githubUrl: 'https://github.com/EddieJorden/my-portfolio',
    image: '/Eddie-Moger-Developer-Portfolio.png'
  },
  {
    id: 12,
    title: 'Modern Portfolio - Racing Theme',
    description: 'Dynamic racing-inspired portfolio with bold animations, unique UI/UX design, and modern aesthetics. Features glassmorphism, particle effects, and smooth transitions.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Styled Components'],
    category: 'Frontend',
    liveUrl: 'https://eddie-portfolio-1k7tzzrm0-eddiejordens-projects.vercel.app/',
    githubUrl: 'https://github.com/EddieJorden/my-portfolio',
    image: '/portfolio-gradient.jpg'
  },
  {
    id: 13,
    title: 'Modern Portfolio - Premium Dark',
    description: 'Sleek dark-themed portfolio with premium animations and professional design. Showcases clean code architecture and modern React patterns.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Styled Components'],
    category: 'Frontend',
    liveUrl: 'https://eddie-portfolio-lwtoc5izw-eddiejordens-projects.vercel.app/',
    githubUrl: 'https://github.com/EddieJorden/my-portfolio',
    image: '/portfolio-premium.jpg'
  },
  {
    id: 14,
    title: 'Modern Portfolio - Gradient Showcase',
    description: 'Vibrant gradient-based portfolio featuring Apple-inspired animations and modern design principles. Multi-page architecture with SEO optimization.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'React Router'],
    category: 'Frontend',
    liveUrl: 'https://eddie-portfolio-8picjqkwj-eddiejordens-projects.vercel.app/',
    githubUrl: 'https://github.com/EddieJorden/my-portfolio',
    image: '/portfolio-racing.jpg'
  }
];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Full-Stack', 'Frontend'];

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
              transition={{ delay: index * 0.05 }}
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
