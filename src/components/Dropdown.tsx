import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, spacing, borderRadius, shadows, transitions } from '../styles/tokens';

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
  };

  const triggerStyle: React.CSSProperties = {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    background: colors.background.elevated,
    border: `1px solid ${isOpen ? colors.primary[500] : colors.neutral[700]}`,
    borderRadius: borderRadius.md,
    color: colors.text.primary,
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: transitions.base,
  };

  const dropdownListStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    left: 0,
    right: 0,
    background: colors.background.elevated,
    border: `1px solid ${colors.neutral[700]}`,
    borderRadius: borderRadius.md,
    maxHeight: '300px',
    overflowY: 'auto',
    zIndex: 1000,
    boxShadow: shadows.xl,
  };

  const optionStyle = (isSelected: boolean): React.CSSProperties => ({
    padding: `${spacing[3]} ${spacing[4]}`,
    cursor: 'pointer',
    transition: transitions.base,
    background: isSelected ? colors.primary[900] : 'transparent',
    color: isSelected ? colors.primary[400] : colors.text.primary,
  });

  return (
    <div ref={dropdownRef} style={containerStyle}>
      <div
        style={triggerStyle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ color: selectedOption ? colors.text.primary : colors.text.tertiary }}>
          {selectedOption?.label || placeholder}
        </span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: transitions.base }}>
          ▼
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={dropdownListStyle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
          >
            {options.map((option, index) => (
              <motion.div
                key={option.value}
                style={optionStyle(option.value === value)}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                whileHover={{ background: colors.neutral[800] }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 }}
              >
                {option.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
