import { motion } from 'framer-motion';
import { colors, spacing, blur, transitions } from '../styles/tokens';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
  logo?: React.ReactNode;
  onItemClick?: (href: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ items, logo, onItemClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: 'rgba(10, 10, 10, 0.8)',
    backdropFilter: `blur(${blur.lg})`,
    borderBottom: `1px solid ${colors.neutral[800]}`,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: `${spacing[4]} ${spacing[6]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const itemsContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: spacing[8],
    alignItems: 'center',
  };

  const itemStyle: React.CSSProperties = {
    color: colors.text.secondary,
    fontSize: '0.9375rem',
    fontWeight: 500,
    transition: transitions.base,
    cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
          {logo}
        </div>
        <div style={itemsContainerStyle}>
          {items.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              style={{
                ...itemStyle,
                color: activeIndex === index ? colors.primary[400] : colors.text.secondary,
              }}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
                onItemClick?.(item.href);
              }}
              whileHover={{ color: colors.primary[400] }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};
