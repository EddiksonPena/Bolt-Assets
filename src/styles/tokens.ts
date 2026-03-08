export const colors = {
  primary: {
    50: '#e6f2ff',
    100: '#b3d9ff',
    200: '#80c0ff',
    300: '#4da7ff',
    400: '#1a8eff',
    500: '#0075e6',
    600: '#005cb3',
    700: '#004380',
    800: '#002a4d',
    900: '#00111a',
    950: '#000b0d',
  },
  secondary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  accent: {
    50: '#fef3e2',
    100: '#fde7c5',
    200: '#fbcf8b',
    300: '#f9b751',
    400: '#f79f17',
    500: '#d68500',
    600: '#a56700',
    700: '#744900',
    800: '#432b00',
    900: '#120d00',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    700: '#15803d',
    900: '#14532d',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    500: '#f59e0b',
    700: '#b45309',
    900: '#78350f',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    700: '#b91c1c',
    900: '#7f1d1d',
  },
  background: {
    primary: '#000000',
    secondary: '#0a0a0a',
    tertiary: '#171717',
    elevated: '#1a1a1a',
  },
  text: {
    primary: '#ffffff',
    secondary: '#d4d4d4',
    tertiary: '#a3a3a3',
    inverse: '#000000',
  },
};

export const typography = {
  fontFamily: {
    display: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.05em',
  },
};

export const spacing = {
  0: '0',
  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  8: '1rem',
  10: '1.25rem',
  12: '1.5rem',
  16: '2rem',
  20: '2.5rem',
  24: '3rem',
  32: '4rem',
  40: '5rem',
  48: '6rem',
  56: '7rem',
  64: '8rem',
  80: '10rem',
  96: '12rem',
  128: '16rem',
};

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  base: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  base: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
  md: '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
  lg: '0 8px 16px 0 rgba(0, 0, 0, 0.5)',
  xl: '0 12px 24px 0 rgba(0, 0, 0, 0.5)',
  '2xl': '0 20px 40px 0 rgba(0, 0, 0, 0.6)',
  glow: {
    primary: '0 0 20px rgba(0, 117, 230, 0.4)',
    accent: '0 0 20px rgba(247, 159, 23, 0.4)',
    subtle: '0 0 10px rgba(255, 255, 255, 0.1)',
  },
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
};

export const gradients = {
  primary: 'linear-gradient(135deg, #0075e6 0%, #0ea5e9 100%)',
  accent: 'linear-gradient(135deg, #f79f17 0%, #d68500 100%)',
  dark: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
  radial: 'radial-gradient(circle at center, rgba(0, 117, 230, 0.15) 0%, transparent 70%)',
  mesh: 'linear-gradient(135deg, rgba(0, 117, 230, 0.1) 0%, rgba(14, 165, 233, 0.1) 50%, rgba(247, 159, 23, 0.1) 100%)',
};

export const blur = {
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
};

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const easing = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1200,
  popover: 1300,
  tooltip: 1400,
  notification: 1500,
};
