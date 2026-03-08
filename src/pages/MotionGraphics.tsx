import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { Card } from '../components/Card';

export const MotionGraphics = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: colors.background.primary,
    padding: spacing[8],
  };

  const headerStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: spacing[16],
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing[4],
    background: 'linear-gradient(135deg, #ffffff 0%, #0ea5e9 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize.xl,
    color: colors.text.secondary,
    maxWidth: '700px',
    margin: '0 auto',
  };

  const contentStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: spacing[20],
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing[8],
  };

  const assetsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: spacing[8],
  };

  const assetPreviewStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    borderRadius: borderRadius.md,
    marginBottom: spacing[4],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleCards = [
    {
      name: 'Cinematic Title Card',
      description: 'Bold, cinematic title card with animated gradient background and smooth entrance.',
      duration: '2000ms',
    },
    {
      name: 'Minimal Title Reveal',
      description: 'Clean, minimal title with elegant line animation and fade-in effect.',
      duration: '1500ms',
    },
  ];

  const lowerThirds = [
    {
      name: 'Modern Lower Third',
      description: 'Sleek lower third with glass morphism effect and smooth slide animation.',
      duration: '800ms',
    },
    {
      name: 'Tech Lower Third',
      description: 'Futuristic lower third with geometric accents and glowing elements.',
      duration: '1000ms',
    },
  ];

  const transitions = [
    {
      name: 'Gradient Wipe',
      description: 'Smooth gradient transition with directional motion blur effect.',
      duration: '600ms',
    },
    {
      name: 'Particle Dissolve',
      description: 'Elegant particle-based transition with depth and movement.',
      duration: '800ms',
    },
  ];

  return (
    <div style={containerStyle}>
      <motion.div
        style={headerStyle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={titleStyle}>Motion Graphics Library</h1>
        <p style={subtitleStyle}>
          Cinematic motion assets designed for video content, animations, and dynamic interfaces
        </p>
      </motion.div>

      <div style={contentStyle}>
        <motion.section
          style={sectionStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={sectionTitleStyle}>Title Cards</h2>
          <div style={assetsGridStyle}>
            {titleCards.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover>
                  <div
                    style={{
                      ...assetPreviewStyle,
                      background: `linear-gradient(135deg, ${colors.primary[900]} 0%, ${colors.background.primary} 100%)`,
                    }}
                  >
                    <motion.div
                      style={{
                        fontSize: typography.fontSize['3xl'],
                        fontWeight: typography.fontWeight.bold,
                        color: colors.text.primary,
                        textAlign: 'center',
                      }}
                      animate={{
                        opacity: [0, 1],
                        y: [20, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      TITLE CARD
                    </motion.div>
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(135deg, ${colors.accent[500]}30 0%, transparent 100%)`,
                      }}
                      animate={{
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: typography.fontSize.lg,
                      fontWeight: typography.fontWeight.semibold,
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
                      marginBottom: spacing[3],
                      lineHeight: 1.6,
                    }}
                  >
                    {asset.description}
                  </p>
                  <div
                    style={{
                      fontSize: typography.fontSize.xs,
                      color: colors.text.tertiary,
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing[2],
                    }}
                  >
                    <span>⏱️</span>
                    <span>Duration: {asset.duration}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          style={sectionStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={sectionTitleStyle}>Lower Thirds</h2>
          <div style={assetsGridStyle}>
            {lowerThirds.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover>
                  <div
                    style={{
                      ...assetPreviewStyle,
                      background: colors.background.secondary,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-end',
                      padding: spacing[6],
                    }}
                  >
                    <motion.div
                      style={{
                        background: 'rgba(26, 26, 26, 0.8)',
                        backdropFilter: 'blur(12px)',
                        border: `1px solid rgba(255, 255, 255, 0.1)`,
                        borderRadius: borderRadius.md,
                        padding: `${spacing[3]} ${spacing[6]}`,
                        borderLeft: `4px solid ${colors.primary[500]}`,
                      }}
                      animate={{
                        x: [-100, 0],
                        opacity: [0, 1],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <div
                        style={{
                          fontSize: typography.fontSize.lg,
                          fontWeight: typography.fontWeight.semibold,
                          color: colors.text.primary,
                        }}
                      >
                        Speaker Name
                      </div>
                      <div
                        style={{
                          fontSize: typography.fontSize.sm,
                          color: colors.text.secondary,
                        }}
                      >
                        Title / Role
                      </div>
                    </motion.div>
                  </div>
                  <h3
                    style={{
                      fontSize: typography.fontSize.lg,
                      fontWeight: typography.fontWeight.semibold,
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
                      marginBottom: spacing[3],
                      lineHeight: 1.6,
                    }}
                  >
                    {asset.description}
                  </p>
                  <div
                    style={{
                      fontSize: typography.fontSize.xs,
                      color: colors.text.tertiary,
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing[2],
                    }}
                  >
                    <span>⏱️</span>
                    <span>Duration: {asset.duration}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          style={sectionStyle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={sectionTitleStyle}>Scene Transitions</h2>
          <div style={assetsGridStyle}>
            {transitions.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover>
                  <div
                    style={{
                      ...assetPreviewStyle,
                      background: colors.background.secondary,
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(90deg, transparent 0%, ${colors.primary[500]} 50%, transparent 100%)`,
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 10,
                        color: colors.text.tertiary,
                        fontSize: typography.fontSize.sm,
                      }}
                    >
                      Transition Preview
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: typography.fontSize.lg,
                      fontWeight: typography.fontWeight.semibold,
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
                      marginBottom: spacing[3],
                      lineHeight: 1.6,
                    }}
                  >
                    {asset.description}
                  </p>
                  <div
                    style={{
                      fontSize: typography.fontSize.xs,
                      color: colors.text.tertiary,
                      display: 'flex',
                      alignItems: 'center',
                      gap: spacing[2],
                    }}
                  >
                    <span>⏱️</span>
                    <span>Duration: {asset.duration}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};
