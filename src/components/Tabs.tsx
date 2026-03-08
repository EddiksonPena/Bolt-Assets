import { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, transitions } from '../styles/tokens';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const containerStyle: React.CSSProperties = {
    width: '100%',
  };

  const tabListStyle: React.CSSProperties = {
    display: 'flex',
    borderBottom: `1px solid ${colors.neutral[800]}`,
    position: 'relative',
  };

  const tabButtonStyle = (isActive: boolean): React.CSSProperties => ({
    flex: 1,
    padding: `${spacing[4]} ${spacing[6]}`,
    background: 'none',
    border: 'none',
    color: isActive ? colors.primary[400] : colors.text.secondary,
    fontSize: '0.9375rem',
    fontWeight: isActive ? 600 : 500,
    cursor: 'pointer',
    transition: transitions.base,
    position: 'relative',
  });

  const indicatorStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    height: '2px',
    background: colors.primary[500],
  };

  const contentStyle: React.CSSProperties = {
    padding: spacing[6],
  };

  const tabWidth = 100 / tabs.length;

  return (
    <div style={containerStyle}>
      <div style={tabListStyle}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={tabButtonStyle(activeTab === index)}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <motion.div
          style={indicatorStyle}
          animate={{
            left: `${activeTab * tabWidth}%`,
            width: `${tabWidth}%`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </div>
      <motion.div
        style={contentStyle}
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};
