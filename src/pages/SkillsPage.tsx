import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SkillItem = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)<{ $level: number }>`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
`;

const InteractiveSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const InteractiveTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const TechBadge = styled(motion.div)<{ $active: boolean }>`
  padding: 1rem 2rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
    : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => props.$active ? '#667eea' : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.1rem;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;

const ExperienceDescription = styled(motion.div)`
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-height: 150px;
  text-align: left;

  h3 {
    color: #667eea;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    font-size: 1.1rem;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    
    li {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
`;

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryType {
  title: string;
  skills: Skill[];
}

interface TechDetail {
  name: string;
  description: string;
  highlights: string[];
}

const SkillsPage: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('React');

  const skillCategories: SkillCategoryType[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Prisma', level: 85 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'Fly.io', level: 85 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      title: 'Other',
      skills: [
        { name: 'AI Integration', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Testing', level: 75 },
        { name: 'System Design', level: 85 }
      ]
    }
  ];

  const techDetails: Record<string, TechDetail> = {
    'React': {
      name: 'React',
      description: 'Expert in building modern, performant React applications with hooks, context, and advanced patterns.',
      highlights: [
        'Built multiple production applications',
        'Deep understanding of component lifecycle and optimization',
        'Experience with state management (Context, Redux)',
        'Custom hooks and reusable components'
      ]
    },
    'Node.js': {
      name: 'Node.js',
      description: 'Extensive experience building scalable backend services and APIs with Node.js and Express.',
      highlights: [
        'RESTful API design and implementation',
        'Authentication and authorization',
        'Database integration and optimization',
        'Microservices architecture'
      ]
    },
    'TypeScript': {
      name: 'TypeScript',
      description: 'Strong typing advocate, using TypeScript to build maintainable and scalable applications.',
      highlights: [
        'Type-safe full-stack applications',
        'Advanced type patterns and generics',
        'Migration from JavaScript to TypeScript',
        'Type definition maintenance'
      ]
    },
    'PostgreSQL': {
      name: 'PostgreSQL',
      description: 'Experience with relational database design, optimization, and complex queries.',
      highlights: [
        'Database schema design',
        'Query optimization',
        'Migrations and version control',
        'Connection pooling and performance tuning'
      ]
    },
    'Next.js': {
      name: 'Next.js',
      description: 'Building full-stack React applications with server-side rendering and modern web features.',
      highlights: [
        'Server-side rendering (SSR)',
        'Static site generation (SSG)',
        'API routes and serverless functions',
        'Performance optimization'
      ]
    },
    'Docker': {
      name: 'Docker',
      description: 'Containerization of applications for consistent development and deployment environments.',
      highlights: [
        'Multi-stage builds',
        'Docker Compose for local development',
        'Production-ready containers',
        'Image optimization'
      ]
    }
  };

  const popularTechs = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Next.js', 'Docker'];

  return (
    <PageContainer>
      <PageTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </PageTitle>

      <SkillsGrid>
        {skillCategories.map((category, catIndex) => (
          <SkillCategory
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h2>{category.title}</h2>
            {category.skills.map((skill, skillIndex) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
              >
                <SkillName>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </SkillName>
                <SkillBar>
                  <SkillProgress
                    $level={skill.level}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </SkillBar>
              </SkillItem>
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>

      <InteractiveSection>
        <InteractiveTitle>Explore My Tech Stack</InteractiveTitle>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
          Click on a technology to learn more about my experience
        </p>
        
        <TechStack>
          {popularTechs.map((tech, index) => (
            <TechBadge
              key={tech}
              $active={selectedTech === tech}
              onClick={() => setSelectedTech(tech)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </TechBadge>
          ))}
        </TechStack>

        {selectedTech && techDetails[selectedTech] && (
          <ExperienceDescription
            key={selectedTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3>{techDetails[selectedTech].name}</h3>
            <p>{techDetails[selectedTech].description}</p>
            <ul>
              {techDetails[selectedTech].highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </ExperienceDescription>
        )}
      </InteractiveSection>
    </PageContainer>
  );
};

export default SkillsPage;
