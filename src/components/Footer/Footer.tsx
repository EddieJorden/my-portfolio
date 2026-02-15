import React from 'react';
import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { GradientText } from '../shared/GlassCard';

const FooterContainer = styled.footer`
  padding: 3rem 2rem;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(15, 23, 42, 0.8)'
  };
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="https://github.com/EddieJorden" target="_blank" rel="noopener noreferrer">
            GitHub
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/eddie-moger/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
          <FooterLink href="https://twitter.com/eddiemoger_com" target="_blank" rel="noopener noreferrer">
            Twitter
          </FooterLink>
          <FooterLink href="mailto:Eddie@EddieMoger.com">
            Email
          </FooterLink>
        </FooterLinks>
        <Copyright>
          © {new Date().getFullYear()} <GradientText>Eddie Moger</GradientText>. 
          Built with <FiHeart /> using React, TypeScript & Framer Motion
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};
