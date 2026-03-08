import { motion } from 'framer-motion';
import { colors, borderRadius, spacing, shadows, typography } from '../styles/tokens';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    positive: boolean;
  };
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, icon }) => {
  const cardStyle: React.CSSProperties = {
    background: colors.background.elevated,
    border: `1px solid ${colors.neutral[800]}`,
    borderRadius: borderRadius.lg,
    padding: spacing[6],
    position: 'relative',
    overflow: 'hidden',
  };

  const labelStyle: React.CSSProperties = {
    color: colors.text.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing[2],
  };

  const valueStyle: React.CSSProperties = {
    color: colors.text.primary,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing[2],
  };

  const changeStyle: React.CSSProperties = {
    color: change?.positive ? colors.success[500] : colors.error[500],
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    display: 'flex',
    alignItems: 'center',
    gap: spacing[1],
  };

  const iconContainerStyle: React.CSSProperties = {
    position: 'absolute',
    top: spacing[6],
    right: spacing[6],
    color: colors.primary[500],
    opacity: 0.3,
    fontSize: typography.fontSize['2xl'],
  };

  const glowStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: 150,
    height: 150,
    background: `radial-gradient(circle, ${colors.primary[500]}20 0%, transparent 70%)`,
    pointerEvents: 'none',
  };

  return (
    <motion.div
      style={cardStyle}
      whileHover={{ y: -4, boxShadow: shadows.xl }}
      transition={{ duration: 0.2 }}
    >
      <div style={glowStyle} />
      {icon && <div style={iconContainerStyle}>{icon}</div>}
      <div style={labelStyle}>{label}</div>
      <div style={valueStyle}>{value}</div>
      {change && (
        <div style={changeStyle}>
          <span>{change.positive ? '↑' : '↓'}</span>
          <span>{Math.abs(change.value)}%</span>
        </div>
      )}
    </motion.div>
  );
};
