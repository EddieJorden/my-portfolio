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
    racing: string;
    carbon: string;
    metal: string;
  };
  gradients: {
    accent: string;
    subtle: string;
    racing: string;
    speed: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    glow: string;
    racing: string;
  };
  transitions: {
    fast: string;
    base: string;
    slow: string;
    snap: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

// RACING-INSPIRED DARK THEME - Automotive performance aesthetic
export const darkTheme: Theme = {
  colors: {
    primary: '#ff0039',        // Racing red - bold, aggressive
    secondary: '#00d4ff',      // Electric cyan - tech meets speed
    accent: '#ffa500',         // Warning orange - track day vibes
    background: '#0a0a0a',     // Deep carbon black
    surfaceOne: '#141414',     // Carbon fiber texture
    surfaceTwo: '#1e1e1e',     // Matte black surfaces
    text: '#ffffff',           // Pure white - high contrast
    textSecondary: '#b0b0b0',  // Brushed aluminum
    textTertiary: '#707070',   // Dark gray metal
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 0, 57, 0.3)',
    success: '#00ff41',        // Neon green - pit lane signals
    error: '#ff0039',
    racing: '#ff0039',         // Signature racing red
    carbon: '#141414',
    metal: '#8a8a8a',
  },
  gradients: {
    accent: 'linear-gradient(135deg, #ff0039 0%, #ff6b00 100%)',
    subtle: 'linear-gradient(135deg, rgba(255, 0, 57, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%)',
    racing: 'linear-gradient(90deg, #ff0039 0%, #ff6b00 50%, #00d4ff 100%)',
    speed: 'linear-gradient(to right, transparent 0%, rgba(255, 0, 57, 0.3) 50%, transparent 100%)',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.4)',
    md: '0 8px 16px rgba(0, 0, 0, 0.5)',
    lg: '0 16px 32px rgba(0, 0, 0, 0.6)',
    xl: '0 24px 48px rgba(0, 0, 0, 0.7)',
    glow: '0 0 40px rgba(255, 0, 57, 0.4)',
    racing: '0 0 30px rgba(255, 0, 57, 0.5), 0 0 60px rgba(255, 0, 57, 0.2)',
  },
  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    base: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    snap: 'all 0.1s cubic-bezier(0.4, 0, 1, 1)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
};

// LIGHT THEME - Clean, professional with racing accents
export const lightTheme: Theme = {
  colors: {
    primary: '#e60028',
    secondary: '#0099cc',
    accent: '#ff8800',
    background: '#f8f8f8',
    surfaceOne: '#ffffff',
    surfaceTwo: '#f0f0f0',
    text: '#0a0a0a',
    textSecondary: '#4a4a4a',
    textTertiary: '#8a8a8a',
    border: 'rgba(0, 0, 0, 0.08)',
    borderHover: 'rgba(230, 0, 40, 0.3)',
    success: '#00cc33',
    error: '#e60028',
    racing: '#e60028',
    carbon: '#2a2a2a',
    metal: '#6a6a6a',
  },
  gradients: {
    accent: 'linear-gradient(135deg, #e60028 0%, #ff6600 100%)',
    subtle: 'linear-gradient(135deg, rgba(230, 0, 40, 0.04) 0%, rgba(0, 153, 204, 0.04) 100%)',
    racing: 'linear-gradient(90deg, #e60028 0%, #ff6600 50%, #0099cc 100%)',
    speed: 'linear-gradient(to right, transparent 0%, rgba(230, 0, 40, 0.15) 50%, transparent 100%)',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.08)',
    md: '0 8px 16px rgba(0, 0, 0, 0.1)',
    lg: '0 16px 32px rgba(0, 0, 0, 0.12)',
    xl: '0 24px 48px rgba(0, 0, 0, 0.15)',
    glow: '0 0 40px rgba(230, 0, 40, 0.2)',
    racing: '0 0 30px rgba(230, 0, 40, 0.3), 0 0 60px rgba(230, 0, 40, 0.1)',
  },
  transitions: {
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    base: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    snap: 'all 0.1s cubic-bezier(0.4, 0, 1, 1)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
};
