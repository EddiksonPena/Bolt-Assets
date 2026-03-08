import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { Card } from '../components/Card';
import { Navigation } from '../components/Navigation';

interface MotionAsset {
  id: string;
  name: string;
  type: string;
  description: string;
  visual_style: string;
  animation_behavior: string;
  duration_ms: number;
  easing: string;
  use_cases: string[];
}

export const MotionAssets = () => {
  const [assets, setAssets] = useState<MotionAsset[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const { data, error } = await supabase
      .from('motion_assets')
      .select('*')
      .order('type', { ascending: true });

    if (error) {
      console.error('Error loading assets:', error);
    } else {
      setAssets(data || []);
    }
    setLoading(false);
  };

  const types = ['all', ...new Set(assets.map((a) => a.type))];
  const filteredAssets =
    selectedType === 'all' ? assets : assets.filter((a) => a.type === selectedType);

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
    gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
    gap: spacing[6],
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: `${spacing[1]} ${spacing[3]}`,
    background: colors.accent[900],
    color: colors.accent[400],
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
    marginTop: spacing[4],
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
          <h1 style={titleStyle}>Motion Assets Library</h1>
          <p style={subtitleStyle}>
            Cinematic motion graphics elements for video and animation projects
          </p>
        </motion.div>

        <div style={filterStyle}>
          {types.map((type) => (
            <button
              key={type}
              style={filterButtonStyle(selectedType === type)}
              onClick={() => setSelectedType(type)}
            >
              {type.replace(/_/g, ' ')}
            </button>
          ))}
        </div>

        <div style={gridStyle}>
          {filteredAssets.map((asset, index) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card hover>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
                  <div>
                    <div style={{ marginBottom: spacing[2] }}>
                      <span style={badgeStyle}>{asset.type.replace(/_/g, ' ')}</span>
                    </div>
                    <h3
                      style={{
                        fontSize: typography.fontSize.xl,
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text.primary,
                        marginBottom: spacing[2],
                      }}
                    >
                      {asset.name}
                    </h3>
                    <p
                      style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {asset.description}
                    </p>
                  </div>

                  <div
                    style={{
                      background: colors.background.secondary,
                      padding: spacing[3],
                      borderRadius: borderRadius.md,
                      fontSize: typography.fontSize.xs,
                      color: colors.text.tertiary,
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>⏱️ {asset.duration_ms}ms</span>
                    <span>📐 {asset.easing}</span>
                  </div>

                  <div>
                    <div style={sectionTitleStyle}>Visual Style</div>
                    <p
                      style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.secondary,
                        lineHeight: 1.5,
                      }}
                    >
                      {asset.visual_style}
                    </p>
                  </div>

                  <div>
                    <div style={sectionTitleStyle}>Animation Behavior</div>
                    <p
                      style={{
                        fontSize: typography.fontSize.sm,
                        color: colors.text.secondary,
                        lineHeight: 1.5,
                      }}
                    >
                      {asset.animation_behavior}
                    </p>
                  </div>

                  {asset.use_cases && asset.use_cases.length > 0 && (
                    <div>
                      <div style={sectionTitleStyle}>Use Cases</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[2] }}>
                        {asset.use_cases.map((useCase, i) => (
                          <span
                            key={i}
                            style={{
                              padding: `${spacing[1]} ${spacing[2]}`,
                              background: colors.background.secondary,
                              borderRadius: borderRadius.sm,
                              fontSize: typography.fontSize.xs,
                              color: colors.text.tertiary,
                            }}
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
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
