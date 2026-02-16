import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surfaceOne};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: ${({ theme }) => theme.transitions.base};
`;

export const GlassCard = Card;

export const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: ${({ theme }) => theme.colors.racing};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    background: ${({ theme }) => theme.gradients.accent};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.racing};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  letter-spacing: 0.02em;

  &:hover {
    border-color: ${({ theme }) => theme.colors.racing};
    background: rgba(255, 0, 57, 0.05);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const GlassButton = PrimaryButton;

export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradients.racing};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionHeading = styled(motion.h2)`
  font-family: 'Rajdhani', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  line-height: 1.1;
`;

export const SectionSubheading = styled(motion.p)`
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 640px;
  margin-bottom: 4rem;
`;

export const SectionContainer = styled.section`
  padding: 7rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 5rem 1.25rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${({ theme }) => theme.colors.border} 20%,
    ${({ theme }) => theme.colors.border} 80%,
    transparent 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 2px;
    background: ${({ theme }) => theme.gradients.racing};
  }
`;
