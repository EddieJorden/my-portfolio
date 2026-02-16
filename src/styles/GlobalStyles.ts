import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #0a0a1e 0%, #1a1a2e 50%, #16213e 100%);
    background-attachment: fixed;
    color: white;
    overflow-x: hidden;
    min-height: 100vh;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #764ba2 0%, #667eea 100%);
  }

  /* Selection */
  ::selection {
    background: rgba(102, 126, 234, 0.3);
    color: white;
  }

  /* Focus Outline */
  *:focus-visible {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Smooth transitions for theme changes */
  body, button, input, textarea {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Remove default button styles */
  button {
    font-family: inherit;
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  /* Paragraphs */
  p {
    line-height: 1.6;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Main Content */
  main {
    min-height: 100vh;
  }

  /* Animations */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  /* Utility classes */
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  .pulse-animation {
    animation: pulse 2s ease-in-out infinite;
  }

  /* Glassmorphism utility */
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Gradient text utility */
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Responsive typography */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  /* Print styles */
  @media print {
    body {
      background: white;
      color: black;
    }
  }
`;

export default GlobalStyles;
