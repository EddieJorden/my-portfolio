import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { GlassCard, GlassButton, GradientText } from '../shared/GlassCard';

const ContactSection = styled.section`
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
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(GlassCard)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    transform: translateX(8px);
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  background: ${({ theme }) => theme.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: white;
`;

const InfoContent = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(30, 41, 59, 0.7)'
  };
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.medium};

  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    color: white;
    transform: translateY(-4px);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(30, 41, 59, 0.7)'
  };
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.25rem;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(30, 41, 59, 0.7)'
  };
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.success}22;
  border: 1px solid ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
`;

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get In <GradientText>Touch</GradientText>
      </SectionTitle>

      <SectionSubtitle
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind? Let's build something amazing together.
      </SectionSubtitle>

      <ContactGrid>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InfoCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <IconWrapper>
              <FiMail />
            </IconWrapper>
            <InfoContent>
              <h4>Email</h4>
              <p>
                <a href="mailto:Eddie@EddieMoger.com">Eddie@EddieMoger.com</a>
              </p>
            </InfoContent>
          </InfoCard>

          <InfoCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <IconWrapper>
              <FiMapPin />
            </IconWrapper>
            <InfoContent>
              <h4>Location</h4>
              <p>Silicon Valley, California</p>
              <p>Available for remote opportunities</p>
            </InfoContent>
          </InfoCard>

          <InfoCard as={motion.div} whileHover={{ scale: 1.02 }}>
            <IconWrapper>
              <FiGithub />
            </IconWrapper>
            <InfoContent>
              <h4>Connect</h4>
              <p>Follow me on social media</p>
              <SocialLinks>
                <SocialIcon
                  href="https://github.com/EddieJorden"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub />
                </SocialIcon>
                <SocialIcon
                  href="https://www.linkedin.com/in/eddie-moger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin />
                </SocialIcon>
                <SocialIcon
                  href="https://twitter.com/eddiemoger_com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiTwitter />
                </SocialIcon>
              </SocialLinks>
            </InfoContent>
          </InfoCard>
        </ContactInfo>

        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </FormGroup>

          {submitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thanks for reaching out! I'll get back to you soon.
            </SuccessMessage>
          )}

          <GlassButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </GlassButton>
        </ContactForm>
      </ContactGrid>
    </ContactSection>
  );
};
