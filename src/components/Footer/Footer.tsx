import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterWrap = styled.footer`
  padding: 3rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const PitchLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 600;
  color: #10b981;
  text-decoration: none;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 999px;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.6);
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const Links = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  width: 34px;
  height: 34px;
  border-radius: ${({ theme }) => theme.radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textTertiary};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceTwo};
  }
`;

export const Footer: React.FC = () => (
  <FooterWrap>
    <FooterInner>
      <Copyright>
        © 2016 Eddie Moger. Built with React & TypeScript.
      </Copyright>
      <PitchLink to="/pitch">🚀 Investment Deck →</PitchLink>
      <Links>
        <FooterLink href="https://github.com/EddieJorden" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub size={16} />
        </FooterLink>
        <FooterLink href="https://www.linkedin.com/in/eddie-moger/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin size={16} />
        </FooterLink>
        <FooterLink href="mailto:eddie@eddiemoger.com" aria-label="Email">
          <FiMail size={16} />
        </FooterLink>
      </Links>
    </FooterInner>
  </FooterWrap>
);
