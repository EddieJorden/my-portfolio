export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    gradientStart: string;
    gradientEnd: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    accent: string;
    glass: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    glow: string;
  };
  transitions: {
    fast: string;
    medium: string;
    slow: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    full: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
}

export const lightTheme: Theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    background: '#f8fafc',
    backgroundSecondary: '#ffffff',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: 'rgba(100, 116, 139, 0.2)',
    success: '#10b981',
    error: '#ef4444',
    gradientStart: '#6366f1',
    gradientEnd: '#ec4899',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    secondary: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    accent: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
    glass: 'rgba(255, 255, 255, 0.1)',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.12)',
    large: '0 8px 32px rgba(0, 0, 0, 0.15)',
    glow: '0 0 20px rgba(99, 102, 241, 0.3)',
  },
  transitions: {
    fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    medium: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    full: '9999px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#818cf8',
    secondary: '#a78bfa',
    accent: '#f472b6',
    background: '#0f172a',
    backgroundSecondary: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    border: 'rgba(148, 163, 184, 0.2)',
    success: '#34d399',
    error: '#f87171',
    gradientStart: '#818cf8',
    gradientEnd: '#f472b6',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
    secondary: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
    accent: 'linear-gradient(135deg, #f472b6 0%, #fb923c 100%)',
    glass: 'rgba(15, 23, 42, 0.4)',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.3)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.4)',
    large: '0 8px 32px rgba(0, 0, 0, 0.5)',
    glow: '0 0 20px rgba(129, 140, 248, 0.4)',
  },
  transitions: {
    fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    medium: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
    full: '9999px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
};
