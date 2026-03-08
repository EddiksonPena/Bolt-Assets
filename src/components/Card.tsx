import { motion } from 'framer-motion';
import { colors, borderRadius, spacing, shadows } from '../styles/tokens';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = true,
}) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      background: colors.background.elevated,
      border: `1px solid ${colors.neutral[800]}`,
    },
    elevated: {
      background: colors.background.elevated,
      boxShadow: shadows.lg,
    },
    glass: {
      background: 'rgba(26, 26, 26, 0.6)',
      backdropFilter: 'blur(12px)',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
    },
  };

  const paddingStyles: Record<string, string> = {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
  };

  return (
    <motion.div
      style={{
        borderRadius: borderRadius.lg,
        padding: paddingStyles[padding],
        ...variantStyles[variant],
      }}
      whileHover={hover ? { y: -4, boxShadow: shadows.xl } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
