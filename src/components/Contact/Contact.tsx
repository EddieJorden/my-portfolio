import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import {
  SectionContainer,
  SectionHeading,
  GradientText,
  PrimaryButton,
} from '../shared/GlassCard';

const ContactInner = styled.div`
  max-width: 680px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surfaceOne};
  transition: ${({ theme }) => theme.transitions.base};
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const ContactIconWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.gradients.subtle};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  flex-shrink: 0;
`;

const ContactLabel = styled.div`
  h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.125rem;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const CTAButton = styled(PrimaryButton)`
  font-size: 1.05rem;
  padding: 1rem 2rem;
`;

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const contacts = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'Eddie@EddieMoger.com',
      href: 'mailto:Eddie@EddieMoger.com',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Silicon Valley, CA',
      href: undefined,
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'EddieJorden',
      href: 'https://github.com/EddieJorden',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'eddie-moger',
      href: 'https://www.linkedin.com/in/eddie-moger/',
    },
  ];

  return (
    <SectionContainer id="contact" ref={ref}>
      <ContactInner>
        <SectionHeading
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Let's <GradientText>Work Together</GradientText>
        </SectionHeading>

        <Subtitle
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Have a project in mind or looking for a developer who understands both
          business and technology? I'd love to hear from you.
        </Subtitle>

        <ContactGrid
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={2}
        >
          {contacts.map((item) => {
            const Tag = item.href ? ContactCard : ContactCard;
            return (
              <Tag
                key={item.label}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                as={item.href ? 'a' : 'div'}
              >
                <ContactIconWrap>{item.icon}</ContactIconWrap>
                <ContactLabel>
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </ContactLabel>
              </Tag>
            );
          })}
        </ContactGrid>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={3}
        >
          <CTAButton
            as={motion.a}
            href="mailto:Eddie@EddieMoger.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Me an Email <FiArrowUpRight />
          </CTAButton>
        </motion.div>
      </ContactInner>
    </SectionContainer>
  );
};
