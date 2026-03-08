import { colors, borderRadius, spacing, shadows, transitions } from '../styles/tokens';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  icon,
}) => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    paddingLeft: icon ? spacing[12] : spacing[4],
    background: colors.background.elevated,
    border: `1px solid ${error ? colors.error[500] : colors.neutral[700]}`,
    borderRadius: borderRadius.md,
    color: colors.text.primary,
    fontSize: '1rem',
    outline: 'none',
    transition: transitions.base,
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    left: spacing[4],
    top: '50%',
    transform: 'translateY(-50%)',
    color: colors.text.tertiary,
    pointerEvents: 'none',
  };

  return (
    <div style={containerStyle}>
      {icon && <div style={iconStyle}>{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = error ? colors.error[500] : colors.primary[500];
          e.target.style.boxShadow = error ? 'none' : shadows.glow.primary;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? colors.error[500] : colors.neutral[700];
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );
};
