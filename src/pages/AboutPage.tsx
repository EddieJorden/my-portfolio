import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageSection = styled(motion.div)`
  position: relative;
`;

const ProfileImage = styled.div`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500') center/cover;
  }
`;

const TextSection = styled(motion.div)`
  color: white;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;

const TimelineSection = styled.div`
  margin-top: 6rem;
`;

const TimelineTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ $align: 'left' | 'right' }>`
  display: flex;
  justify-content: ${props => props.$align === 'left' ? 'flex-end' : 'flex-start'};
  padding: 0 2rem;
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`;

const TimelineContent = styled.div<{ $align: 'left' | 'right' }>`
  width: 45%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$align === 'left' ? 'right: -10px' : 'left: -10px'};
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);

    @media (max-width: 768px) {
      left: -40px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  h3 {
    font-size: 1.5rem;
    color: #667eea;
    margin-bottom: 0.5rem;
  }

  .year {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const AboutPage: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  const timeline = [
    {
      year: '2026',
      title: 'EDI Audiology',
      description: 'Founded audiology calibration and repair business, building custom CRM and automation systems.',
      align: 'right' as const
    },
    {
      year: '2020-2025',
      title: 'Full-Stack Development',
      description: 'Specialized in React, Node.js, and modern web technologies. Built enterprise applications and custom solutions.',
      align: 'left' as const
    },
    {
      year: '2015-2020',
      title: 'Software Engineering',
      description: 'Developed scalable applications and learned the fundamentals of system architecture and design.',
      align: 'right' as const
    },
    {
      year: '2012',
      title: 'Started Coding',
      description: 'Began the journey into software development, learning programming fundamentals and web technologies.',
      align: 'left' as const
    }
  ];

  return (
    <PageContainer>
      <ContentGrid>
        <ImageSection
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage />
        </ImageSection>

        <TextSection
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Title>About Me</Title>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I'm a full-stack developer with a passion for creating innovative solutions
            that make a real difference. Currently building EDI Audiology, a business
            focused on audiology equipment calibration and repair.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            With over a decade of experience in software development, I specialize in
            React, Node.js, and modern web technologies. I love building things that
            are not just functional, but beautiful and intuitive.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            When I'm not coding, you'll find me exploring new technologies, optimizing
            workflows, or collaborating with AI assistants to push the boundaries of
            what's possible.
          </Paragraph>
        </TextSection>
      </ContentGrid>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <TimelineSection>
        <TimelineTitle>My Journey</TimelineTitle>
        <Timeline>
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              $align={item.align}
              initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TimelineContent $align={item.align}>
                <h3>{item.title}</h3>
                <div className="year">{item.year}</div>
                <p>{item.description}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </PageContainer>
  );
};

export default AboutPage;
