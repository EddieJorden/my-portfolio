import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

const Nav = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '0.875rem 1.5rem' : '1.25rem 1.5rem')};
  background: ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.background + 'f5' : 'rgba(10, 10, 10, 0.4)'};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.racing : 'rgba(255, 255, 255, 0.05)'};
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-family: 'Rajdhani', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.gradients.racing};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.625rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.racing};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    
    &::before {
      width: 70%;
    }
  }
`;

const ThemeToggle = styled.button`
  width: 38px;
  height: 38px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 2px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: ${({ theme }) => theme.transitions.fast};
  margin-left: 0.75rem;

  &:hover {
    color: ${({ theme }) => theme.colors.racing};
    border-color: ${({ theme }) => theme.colors.racing};
    background: rgba(255, 0, 57, 0.05);
    transform: rotate(180deg);
  }
`;

const MobileBtn = styled.button`
  display: none;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.racing};
    background: rgba(255, 0, 57, 0.05);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 85vw);
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  border-left: 2px solid ${({ theme }) => theme.colors.racing};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const MobileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

const MobileLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;

  &::before {
    content: '▸';
    position: absolute;
    left: -1.5rem;
    opacity: 0;
    color: ${({ theme }) => theme.colors.racing};
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.racing};
    padding-left: 1.5rem;
    
    &::before {
      left: 0;
      opacity: 1;
    }
  }
`;

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (section: string) => {
    scrollToSection(section);
    setOpen(false);
  };

  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <Nav
        $scrolled={scrolled}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <NavInner>
          <Logo onClick={() => nav('home')}>Eddie Moger</Logo>

          <NavLinks>
            {links.map((l) => (
              <NavLink key={l} onClick={() => nav(l.toLowerCase())}>
                {l}
              </NavLink>
            ))}
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </ThemeToggle>
          </NavLinks>

          <MobileBtn onClick={() => setOpen(true)} aria-label="Open menu">
            <FiMenu />
          </MobileBtn>
        </NavInner>
      </Nav>

      <AnimatePresence>
        {open && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <MobileTop>
                <Logo as="span">Eddie Moger</Logo>
                <MobileBtn onClick={() => setOpen(false)} aria-label="Close menu">
                  <FiX />
                </MobileBtn>
              </MobileTop>

              {links.map((l) => (
                <MobileLink key={l} onClick={() => nav(l.toLowerCase())}>
                  {l}
                </MobileLink>
              ))}

              <div style={{ marginTop: '2rem' }}>
                <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                  {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
                </ThemeToggle>
              </div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
