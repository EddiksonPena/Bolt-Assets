import { motion, AnimatePresence } from 'framer-motion';
import { colors, spacing, borderRadius, blur } from '../styles/tokens';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const sizeMap = {
    sm: '400px',
    md: '600px',
    lg: '800px',
    full: '95vw',
  };

  const backdropStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: `blur(${blur.md})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1200,
    padding: spacing[6],
  };

  const modalStyle: React.CSSProperties = {
    background: colors.background.elevated,
    borderRadius: borderRadius.xl,
    width: '100%',
    maxWidth: sizeMap[size],
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative',
  };

  const headerStyle: React.CSSProperties = {
    padding: spacing[6],
    borderBottom: `1px solid ${colors.neutral[800]}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: colors.text.primary,
  };

  const closeButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: colors.text.secondary,
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: spacing[2],
    lineHeight: 1,
  };

  const contentStyle: React.CSSProperties = {
    padding: spacing[6],
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={backdropStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            style={modalStyle}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div style={headerStyle}>
                <h2 style={titleStyle}>{title}</h2>
                <button style={closeButtonStyle} onClick={onClose}>
                  ×
                </button>
              </div>
            )}
            <div style={contentStyle}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
