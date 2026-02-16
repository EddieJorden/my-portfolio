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
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 150, 255, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/eddie_profile_pic.jpg') center/cover;
  }
`;

const TextSection = styled(motion.div)`
  color: white;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
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
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 150, 255, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #0096ff 0%, #0066cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ImageCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 16/10;
  box-shadow: 0 10px 40px rgba(0, 150, 255, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: white;
  font-size: 0.9rem;
`;

const AboutPage: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Years Business' },
    { number: '10+', label: 'Years Coding' },
    { number: '50+', label: 'Projects Built' },
    { number: '100%', label: 'Dedication' }
  ];

  const images = [
    {
      src: '/gt86nurburgring.jpeg',
      alt: 'Eddie Moger racing a GT86 at the Nurburgring in Germany',
      caption: 'Racing cars on the world famous Nürburgring in Germany'
    },
    {
      src: '/Biirdee-office-Burlingame-CA.jpeg',
      alt: 'Eddie Moger at Biirdee Travel office',
      caption: 'At the Biirdee Travel office in Burlingame, CA'
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
          <Title>Welcome to my corner of the internet!</Title>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            My name is Eddie and I am a software developer and entrepreneur with a passion for 
            building innovative solutions.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I have an extensive background in automotive racing, specializing in chassis tuning, 
            and a background in PC building, including hardware assembly, overclocking, and using 
            aftermarket software. But that's just the tip of the iceberg. My true passion lies in 
            software development, where I create solutions for small businesses including integrating 
            AI and machine learning, fully custom CRMs, internal communications, websites, SEO, 
            e-commerce, custom back-end software, financial simulations, data visualization, encryption 
            and much more.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I have a passion for dynamic programming and problem-solving. I spent 8 years in corporate 
            management before starting my own business, which I ran with great success for 15 years 
            before deciding to switch to something I am more passionate about - software development.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            I have competed in auto racing, motorcycle racing, rock climbing, downhill mountain bike 
            racing, Muay Thai Kickboxing and much more. I believe that my passion for these activities 
            translates into my work ethic - I am always pushing myself to be the best and constantly 
            seeking new challenges.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            So, why should you choose me for your next project? Well, I am a nerd at heart and love 
            solving problems. My skills are not just tools, they are the tools I use for success. I 
            am excited to work on new projects and help build your dreams. Whether you're looking for 
            a new website, custom software, or just someone to bounce ideas off of, I am here for you. 
            Let's make something great together!
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
          >
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <ImagesGrid>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <img src={image.src} alt={image.alt} />
            <ImageCaption>{image.caption}</ImageCaption>
          </ImageCard>
        ))}
      </ImagesGrid>
    </PageContainer>
  );
};

export default AboutPage;
