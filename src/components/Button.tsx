import { motion } from 'framer-motion';
import { colors, borderRadius, spacing, shadows, transitions } from '../styles/tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    borderRadius: borderRadius.md,
    transition: transitions.base,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    border: 'none',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.primary[600]} 100%)`,
      color: colors.text.primary,
      boxShadow: shadows.glow.primary,
    },
    secondary: {
      background: `linear-gradient(135deg, ${colors.secondary[500]} 0%, ${colors.secondary[600]} 100%)`,
      color: colors.text.primary,
      boxShadow: shadows.glow.primary,
    },
    outline: {
      background: 'transparent',
      border: `2px solid ${colors.primary[500]}`,
      color: colors.primary[400],
    },
    ghost: {
      background: 'transparent',
      color: colors.text.secondary,
    },
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: `${spacing[2]} ${spacing[4]}`,
      fontSize: '0.875rem',
    },
    md: {
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: '1rem',
    },
    lg: {
      padding: `${spacing[4]} ${spacing[8]}`,
      fontSize: '1.125rem',
    },
  };

  return (
    <motion.button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
      }}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.02, boxShadow: shadows.lg }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
};
