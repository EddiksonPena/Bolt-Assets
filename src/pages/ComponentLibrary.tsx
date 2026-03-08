import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { Card } from '../components/Card';
import { Navigation } from '../components/Navigation';

interface UIComponent {
  id: string;
  name: string;
  category: string;
  description: string;
  states: Record<string, string>;
  props: Record<string, any>;
  usage_notes: string;
  motion_behavior: string;
}

export const ComponentLibrary = () => {
  const [components, setComponents] = useState<UIComponent[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadComponents();
  }, []);

  const loadComponents = async () => {
    const { data, error } = await supabase
      .from('ui_components')
      .select('*')
      .order('category', { ascending: true });

    if (error) {
      console.error('Error loading components:', error);
    } else {
      setComponents(data || []);
    }
    setLoading(false);
  };

  const categories = ['all', ...new Set(components.map((c) => c.category))];
  const filteredComponents =
    selectedCategory === 'all'
      ? components
      : components.filter((c) => c.category === selectedCategory);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: colors.background.primary,
    paddingTop: '80px',
  };

  const mainStyle: React.CSSProperties = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: spacing[8],
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: spacing[12],
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing[2],
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
  };

  const filterStyle: React.CSSProperties = {
    display: 'flex',
    gap: spacing[3],
    marginBottom: spacing[8],
    flexWrap: 'wrap',
  };

  const filterButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: `${spacing[2]} ${spacing[4]}`,
    background: isActive ? colors.primary[500] : colors.background.elevated,
    border: `1px solid ${isActive ? colors.primary[500] : colors.neutral[700]}`,
    borderRadius: borderRadius.full,
    color: isActive ? colors.text.primary : colors.text.secondary,
    fontSize: '0.875rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: '0.2s',
  });

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: spacing[6],
  };

  const componentCardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[4],
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: `${spacing[1]} ${spacing[3]}`,
    background: colors.primary[900],
    color: colors.primary[400],
    borderRadius: borderRadius.full,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    textTransform: 'uppercase',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.tertiary,
    textTransform: 'uppercase',
    marginBottom: spacing[2],
    letterSpacing: '0.05em',
  };

  const navItems = [
    { label: 'Overview', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Tokens', href: '/tokens' },
    { label: 'Motion', href: '/motion' },
  ];

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={mainStyle}>
          <div style={{ textAlign: 'center', color: colors.text.secondary }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <Navigation
        items={navItems}
        logo={
          <div style={{ fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold }}>
            <span style={{ color: colors.primary[400] }}>Design</span>
            <span style={{ color: colors.text.primary }}>System</span>
          </div>
        }
      />

      <div style={mainStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={titleStyle}>Component Library</h1>
          <p style={subtitleStyle}>
            Reusable UI components with specifications and usage guidelines
          </p>
        </motion.div>

        <div style={filterStyle}>
          {categories.map((category) => (
            <button
              key={category}
              style={filterButtonStyle(selectedCategory === category)}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={gridStyle}>
          {filteredComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card hover>
                <div style={componentCardStyle}>
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <span style={badgeStyle}>{component.category}</span>
                    </div>
                    <h3
                      style={{
                        fontSize: typography.fontSize.xl,
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text.primary,
                        marginBottom: spacing[2],
                      }}
                    >
                      {component.name}
                    </h3>
                    <p
                      style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {component.description}
                    </p>
                  </div>

                  <div>
                    <div style={sectionTitleStyle}>States</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                      {Object.keys(component.states).map((state) => (
                        <span
                          key={state}
                          style={{
                            padding: `${spacing[1]} ${spacing[2]}`,
                            background: colors.background.secondary,
                            borderRadius: borderRadius.sm,
                            fontSize: typography.fontSize.xs,
                            color: colors.text.tertiary,
                          }}
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={sectionTitleStyle}>Motion Behavior</div>
                    <p
                      style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.secondary,
                        lineHeight: 1.5,
                      }}
                    >
                      {component.motion_behavior}
                    </p>
                  </div>

                  {component.usage_notes && (
                    <div>
                      <div style={sectionTitleStyle}>Usage Notes</div>
                      <p
                        style={{
                          fontSize: typography.fontSize.sm,
                          color: colors.text.secondary,
                          lineHeight: 1.5,
                        }}
                      >
                        {component.usage_notes}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
