import { createGlobalStyle } from 'styled-components';
import { Theme } from '../theme/theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  /* Import racing-inspired bold fonts */
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    /* BOLD RACING TYPOGRAPHY - Rajdhani has that speed/tech aesthetic */
    font-family: 'Space Grotesk', 'Rajdhani', -apple-system, BlinkMacSystemFont, 
      'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
    line-height: 1.6;
    font-size: 16px;
    letter-spacing: -0.011em;
  }

  /* Bold headings with racing aesthetic */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rajdhani', 'Space Grotesk', sans-serif;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  p {
    line-height: 1.7;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  /* Racing-themed scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.gradients.racing};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.racing};
  }

  /* Racing red selection */
  ::selection {
    background-color: ${({ theme }) => theme.colors.racing};
    color: white;
  }

  /* Focus styles with racing accent */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.racing};
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* Smooth mobile scrolling */
  @media (max-width: 768px) {
    html {
      scroll-padding-top: 80px;
    }
  }
`;

export default GlobalStyles;
