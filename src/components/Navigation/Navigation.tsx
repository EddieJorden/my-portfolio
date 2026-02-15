import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 2rem;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(15, 23, 42, 0.8)'
  };
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.transitions.medium};

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradients.primary};
    transition: width 0.3s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled(motion.button)`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: rotate(180deg);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: ${({ theme }) =>
    theme.colors.backgroundSecondary === '#ffffff'
      ? 'rgba(255, 255, 255, 0.95)'
      : 'rgba(15, 23, 42, 0.95)'
  };
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.large};
  z-index: 1001;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.25rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 1rem;
  }
`;

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: isScrolled ? '0 4px 16px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <NavContainer>
          <Logo
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Eddie Moger
          </Logo>

          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </NavLink>
            ))}
            <ThemeToggle
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
          </NavLinks>

          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <FiMenu />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <CloseButton onClick={() => setMobileMenuOpen(false)}>
              <FiX />
            </CloseButton>
            {navItems.map((item) => (
              <MobileNavLink
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
              >
                {item}
              </MobileNavLink>
            ))}
            <ThemeToggle
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ alignSelf: 'flex-start' }}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};
