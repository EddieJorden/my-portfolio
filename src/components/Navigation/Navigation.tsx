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
    $scrolled ? theme.colors.background + 'ee' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(16px)' : 'none')};
  border-bottom: 1px solid ${({ theme, $scrolled }) =>
    $scrolled ? theme.colors.border : 'transparent'};
  transition: all 0.3s ease;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  letter-spacing: -0.02em;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 450;
  padding: 0.5rem 0.875rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceTwo};
  }
`;

const ThemeToggle = styled.button`
  width: 34px;
  height: 34px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: ${({ theme }) => theme.transitions.fast};
  margin-left: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.borderHover};
    background: ${({ theme }) => theme.colors.surfaceTwo};
  }
`;

const MobileBtn = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
`;

const MobileTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;
  font-weight: 500;
  padding: 0.875rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
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
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
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
              {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
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
              transition={{ type: 'tween', duration: 0.25 }}
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

              <div style={{ marginTop: '1.5rem' }}>
                <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                  {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
                </ThemeToggle>
              </div>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
