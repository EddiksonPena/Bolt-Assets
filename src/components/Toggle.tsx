import { motion } from 'framer-motion';
import { colors, borderRadius, transitions } from '../styles/tokens';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  };

  const trackStyle: React.CSSProperties = {
    width: '48px',
    height: '24px',
    background: checked ? colors.primary[500] : colors.neutral[700],
    borderRadius: borderRadius.full,
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    transition: transitions.base,
    position: 'relative',
  };

  const knobStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    background: colors.text.primary,
    borderRadius: borderRadius.full,
  };

  const labelStyle: React.CSSProperties = {
    color: colors.text.primary,
    fontSize: '0.9375rem',
    fontWeight: 500,
    userSelect: 'none',
  };

  return (
    <div
      style={containerStyle}
      onClick={() => !disabled && onChange(!checked)}
    >
      <div style={trackStyle}>
        <motion.div
          style={knobStyle}
          animate={{
            x: checked ? 24 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
          }}
        />
      </div>
      {label && <span style={labelStyle}>{label}</span>}
    </div>
  );
};
