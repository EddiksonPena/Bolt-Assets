import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { Card } from '../components/Card';
import { Navigation } from '../components/Navigation';
import { Tabs } from '../components/Tabs';

interface DesignToken {
  id: string;
  category: string;
  name: string;
  value: any;
  description: string;
}

export const TokensPage = () => {
  const [tokens, setTokens] = useState<DesignToken[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTokens();
  }, []);

  const loadTokens = async () => {
    const { data, error } = await supabase
      .from('design_tokens')
      .select('*')
      .order('category', { ascending: true });

    if (error) {
      console.error('Error loading tokens:', error);
    } else {
      setTokens(data || []);
    }
    setLoading(false);
  };

  const groupedTokens = tokens.reduce((acc, token) => {
    if (!acc[token.category]) acc[token.category] = [];
    acc[token.category].push(token);
    return acc;
  }, {} as Record<string, DesignToken[]>);

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

  const tokenCardStyle: React.CSSProperties = {
    marginBottom: spacing[6],
  };

  const tokenNameStyle: React.CSSProperties = {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing[2],
  };

  const tokenDescStyle: React.CSSProperties = {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginBottom: spacing[4],
    lineHeight: 1.6,
  };

  const colorSwatchStyle = (color: string): React.CSSProperties => ({
    width: '40px',
    height: '40px',
    borderRadius: borderRadius.md,
    background: color,
    border: `1px solid ${colors.neutral[800]}`,
  });

  const renderTokenValue = (token: DesignToken) => {
    if (token.category === 'color') {
      const colorValues = token.value;
      return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing[4] }}>
          {Object.entries(colorValues).map(([shade, color]) => (
            <div key={shade} style={{ textAlign: 'center' }}>
              <div style={colorSwatchStyle(color as string)} />
              <div
                style={{
                  fontSize: typography.fontSize.xs,
                  color: colors.text.tertiary,
                  marginTop: spacing[1],
                }}
              >
                {shade}
              </div>
              <div
                style={{
                  fontSize: typography.fontSize.xs,
                  color: colors.text.tertiary,
                  fontFamily: 'monospace',
                }}
              >
                {color as string}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <pre
        style={{
          background: colors.background.secondary,
          padding: spacing[4],
          borderRadius: borderRadius.md,
          fontSize: typography.fontSize.sm,
          color: colors.text.secondary,
          overflow: 'auto',
        }}
      >
        {JSON.stringify(token.value, null, 2)}
      </pre>
    );
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

  const tabsData = Object.entries(groupedTokens).map(([category, categoryTokens]) => ({
    label: category.charAt(0).toUpperCase() + category.slice(1),
    content: (
      <div>
        {categoryTokens.map((token) => (
          <Card key={token.id} variant="elevated" padding="lg" hover={false}>
            <div style={tokenCardStyle}>
              <h3 style={tokenNameStyle}>{token.name}</h3>
              <p style={tokenDescStyle}>{token.description}</p>
              {renderTokenValue(token)}
            </div>
          </Card>
        ))}
      </div>
    ),
  }));

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
          <h1 style={titleStyle}>Design Tokens</h1>
          <p style={subtitleStyle}>
            Foundational design values that power the entire system
          </p>
        </motion.div>

        <Card variant="glass" padding="lg">
          <Tabs tabs={tabsData} />
        </Card>
      </div>
    </div>
  );
};
