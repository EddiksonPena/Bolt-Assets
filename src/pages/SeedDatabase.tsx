import { useState } from 'react';
import { seedAllData } from '../lib/seedData';
import { Button } from '../components/Button';
import { colors, spacing, typography } from '../styles/tokens';

export const SeedDatabase = () => {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSeed = async () => {
    setLoading(true);
    setStatus('Seeding database...');
    try {
      await seedAllData();
      setStatus('✅ Database seeded successfully!');
    } catch (error) {
      setStatus('❌ Error seeding database: ' + (error as Error).message);
    }
    setLoading(false);
  };

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: colors.background.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[6],
  };

  const cardStyle: React.CSSProperties = {
    background: colors.background.elevated,
    padding: spacing[12],
    borderRadius: '1rem',
    textAlign: 'center',
    maxWidth: '500px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing[4],
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    marginBottom: spacing[8],
    lineHeight: 1.6,
  };

  const statusStyle: React.CSSProperties = {
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    marginTop: spacing[6],
    padding: spacing[4],
    background: colors.background.secondary,
    borderRadius: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Seed Database</h1>
        <p style={descriptionStyle}>
          Click the button below to populate the database with design tokens, UI components,
          motion assets, and brand guidelines.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={handleSeed}
          disabled={loading}
          fullWidth
        >
          {loading ? 'Seeding...' : 'Seed Database'}
        </Button>
        {status && <div style={statusStyle}>{status}</div>}
      </div>
    </div>
  );
};
