export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surfaceOne: string;
    surfaceTwo: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    border: string;
    borderHover: string;
    success: string;
    error: string;
  };
  gradients: {
    accent: string;
    subtle: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    glow: string;
  };
  transitions: {
    fast: string;
    base: string;
    slow: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

export const darkTheme: Theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#06b6d4',
    accent: '#3b82f6',
    background: '#09090b',
    surfaceOne: '#111113',
    surfaceTwo: '#18181b',
    text: '#fafafa',
    textSecondary: '#a1a1aa',
    textTertiary: '#71717a',
    border: 'rgba(63, 63, 70, 0.5)',
    borderHover: 'rgba(63, 63, 70, 0.8)',
    success: '#22c55e',
    error: '#ef4444',
  },
  gradients: {
    accent: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
    subtle: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.04) 100%)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.6)',
    glow: '0 0 24px rgba(59, 130, 246, 0.15)',
  },
  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    base: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
    full: '9999px',
  },
};

export const lightTheme: Theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#0891b2',
    accent: '#2563eb',
    background: '#fafafa',
    surfaceOne: '#ffffff',
    surfaceTwo: '#f4f4f5',
    text: '#09090b',
    textSecondary: '#52525b',
    textTertiary: '#a1a1aa',
    border: 'rgba(228, 228, 231, 0.8)',
    borderHover: 'rgba(212, 212, 216, 1)',
    success: '#16a34a',
    error: '#dc2626',
  },
  gradients: {
    accent: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
    subtle: 'linear-gradient(135deg, rgba(37, 99, 235, 0.06) 0%, rgba(8, 145, 178, 0.03) 100%)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.08)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.12)',
    glow: '0 0 24px rgba(37, 99, 235, 0.1)',
  },
  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    base: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '20px',
    full: '9999px',
  },
};
