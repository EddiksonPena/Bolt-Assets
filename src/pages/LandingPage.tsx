import { motion } from 'framer-motion';
import { colors, spacing, typography } from '../styles/tokens';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const LandingPage = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: colors.background.primary,
  };

  const heroStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: spacing[6],
  };

  const heroContentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    maxWidth: '900px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: typography.fontSize['7xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing[6],
    background: 'linear-gradient(135deg, #ffffff 0%, #0ea5e9 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.1,
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: typography.fontSize.xl,
    color: colors.text.secondary,
    marginBottom: spacing[12],
    lineHeight: 1.6,
  };

  const glowOrbStyle: React.CSSProperties = {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(100px)',
    opacity: 0.3,
    pointerEvents: 'none',
  };

  const featuresStyle: React.CSSProperties = {
    padding: `${spacing[32]} ${spacing[6]}`,
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const featuresSectionTitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    textAlign: 'center',
    marginBottom: spacing[16],
    color: colors.text.primary,
  };

  const featuresGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing[8],
  };

  const features = [
    {
      title: 'Design Tokens',
      description: 'Comprehensive token system for colors, typography, spacing, and more. Build consistent interfaces across all platforms.',
      icon: '🎨',
    },
    {
      title: 'UI Components',
      description: 'Production-ready components with multiple variants, states, and built-in animations for web and mobile.',
      icon: '🧩',
    },
    {
      title: 'Motion Graphics',
      description: 'Cinematic motion assets including title cards, transitions, and animated elements for video content.',
      icon: '🎬',
    },
    {
      title: 'Cross-Platform',
      description: 'Unified visual language that seamlessly translates between product UI and motion design.',
      icon: '📱',
    },
    {
      title: 'Scalable System',
      description: 'Modular architecture designed to grow with your product and adapt to new use cases.',
      icon: '🚀',
    },
    {
      title: 'Premium Quality',
      description: 'High-end aesthetics combining modern clarity with cinematic energy and intelligent sophistication.',
      icon: '✨',
    },
  ];

  return (
    <div style={containerStyle}>
      <section style={heroStyle}>
        <motion.div
          style={{
            ...glowOrbStyle,
            top: '10%',
            left: '20%',
            width: '500px',
            height: '500px',
            background: colors.primary[500],
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          style={{
            ...glowOrbStyle,
            bottom: '20%',
            right: '15%',
            width: '400px',
            height: '400px',
            background: colors.accent[500],
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          style={heroContentStyle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={headingStyle}>Futuristic Design System</h1>
          <p style={subheadingStyle}>
            A complete digital asset system for building premium, cinematic experiences
            across motion graphics, web, and mobile platforms.
          </p>
          <div style={{ display: 'flex', gap: spacing[4], justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg">
              Explore Components
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </section>

      <section style={featuresStyle}>
        <h2 style={featuresSectionTitleStyle}>Everything You Need</h2>
        <div style={featuresGridStyle}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div style={{ fontSize: typography.fontSize['4xl'], marginBottom: spacing[4] }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: typography.fontSize.xl,
                    fontWeight: typography.fontWeight.bold,
                    marginBottom: spacing[3],
                    color: colors.text.primary,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: colors.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
