import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 100px 2rem 4rem;
  max-width: 900px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
  transition: ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeroImage = styled.div<{ $image?: string }>`
  width: 100%;
  height: 320px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ $image }) =>
    $image
      ? `url(${$image}) center/cover no-repeat`
      : 'linear-gradient(135deg, #0d2a4a 0%, #0a0a1a 100%)'};
  margin-bottom: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled(motion.h1)`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
`;

const Meta = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.gradients.subtle};
  color: ${({ theme }) => theme.colors.primary};
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionLabel = styled.h2`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.75rem;
`;

const Body = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.55;

  &::before {
    content: '→';
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 2rem 0;
`;

const LinkRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.6rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.gradients.subtle};
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageContainer>
        <BackLink to="/projects">
          <FiArrowLeft size={14} /> All Projects
        </BackLink>
        <NotFound>
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist.</p>
        </NotFound>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <BackLink to="/projects">
          <FiArrowLeft size={14} /> All Projects
        </BackLink>

        <HeroImage $image={project.image} />

        <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {project.title}
        </Title>

        <Meta>
          <span>{project.role}</span>
          <span>·</span>
          <span>{project.year}</span>
          <span>·</span>
          <span>{project.category}</span>
        </Meta>

        <TechRow>
          {project.tech.map((t, i) => (
            <TechTag key={i}>{t}</TechTag>
          ))}
        </TechRow>

        <Section>
          <SectionLabel>Overview</SectionLabel>
          <Body>{project.longDescription}</Body>
        </Section>

        <Divider />

        <Section>
          <SectionLabel>Key Features</SectionLabel>
          <FeatureList>
            {project.features.map((f, i) => (
              <FeatureItem key={i}>{f}</FeatureItem>
            ))}
          </FeatureList>
        </Section>

        {project.challenges && (
          <>
            <Divider />
            <Section>
              <SectionLabel>Challenges</SectionLabel>
              <Body>{project.challenges}</Body>
            </Section>
          </>
        )}

        <Divider />

        <LinkRow>
          {project.liveUrl && (
            <ActionLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <FiExternalLink size={14} /> Live Demo
            </ActionLink>
          )}
          {project.githubUrl && (
            <ActionLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <FiGithub size={14} /> GitHub
            </ActionLink>
          )}
        </LinkRow>
      </motion.div>
    </PageContainer>
  );
};

export default ProjectDetailPage;
