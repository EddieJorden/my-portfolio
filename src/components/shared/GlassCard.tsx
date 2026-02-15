import styled from 'styled-components';
import { motion } from 'framer-motion';

interface GlassCardProps {
  padding?: string;
  margin?: string;
  hover?: boolean;
}

export const GlassCard = styled(motion.div)<GlassCardProps>`
  background: ${({ theme }) => 
    theme.colors.backgroundSecondary === '#ffffff' 
      ? 'rgba(255, 255, 255, 0.7)' 
      : 'rgba(30, 41, 59, 0.7)'
  };
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ padding }) => padding || '2rem'};
  margin: ${({ margin }) => margin || '0'};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.medium};
  
  ${({ hover }) => hover && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }
  `}

  @media (max-width: 768px) {
    padding: ${({ padding }) => padding || '1.5rem'};
  }
`;

export const GlassButton = styled(motion.button)`
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
`;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`;
