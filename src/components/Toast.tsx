import { motion, AnimatePresence } from 'framer-motion';
import { colors, spacing, borderRadius, shadows } from '../styles/tokens';
import { useEffect } from 'react';

interface ToastProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  type,
  message,
  isVisible,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const typeStyles: Record<string, React.CSSProperties> = {
    success: {
      background: colors.success[900],
      borderLeft: `4px solid ${colors.success[500]}`,
      color: colors.success[100],
    },
    error: {
      background: colors.error[900],
      borderLeft: `4px solid ${colors.error[500]}`,
      color: colors.error[100],
    },
    warning: {
      background: colors.warning[900],
      borderLeft: `4px solid ${colors.warning[500]}`,
      color: colors.warning[100],
    },
    info: {
      background: colors.primary[900],
      borderLeft: `4px solid ${colors.primary[500]}`,
      color: colors.primary[100],
    },
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: spacing[6],
    right: spacing[6],
    zIndex: 1500,
    maxWidth: '400px',
  };

  const toastStyle: React.CSSProperties = {
    ...typeStyles[type],
    padding: spacing[4],
    borderRadius: borderRadius.md,
    boxShadow: shadows.xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing[4],
  };

  const iconMap = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    fontSize: '1.25rem',
    padding: 0,
    lineHeight: 1,
    opacity: 0.7,
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div style={containerStyle}>
          <motion.div
            style={toastStyle}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: spacing[3] }}>
              <span style={{ fontSize: '1.25rem' }}>{iconMap[type]}</span>
              <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{message}</span>
            </div>
            <button style={closeButtonStyle} onClick={onClose}>
              ×
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
