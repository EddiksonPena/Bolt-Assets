import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { Button } from '../components/Button';

export const MobileOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const containerStyle: React.CSSProperties = {
    maxWidth: '420px',
    margin: '0 auto',
    minHeight: '100vh',
    background: colors.background.primary,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: spacing[6],
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    gap: spacing[8],
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '200px',
    height: '200px',
    borderRadius: borderRadius.full,
    background: `linear-gradient(135deg, ${colors.primary[500]}20 0%, ${colors.accent[500]}20 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '80px',
    position: 'relative',
    overflow: 'hidden',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing[3],
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    lineHeight: 1.6,
    maxWidth: '320px',
  };

  const progressStyle: React.CSSProperties = {
    display: 'flex',
    gap: spacing[2],
    justifyContent: 'center',
    marginBottom: spacing[6],
  };

  const dotStyle = (isActive: boolean): React.CSSProperties => ({
    width: isActive ? '24px' : '8px',
    height: '8px',
    borderRadius: borderRadius.full,
    background: isActive ? colors.primary[500] : colors.neutral[700],
    transition: 'all 0.3s ease',
  });

  const steps = [
    {
      icon: '🎨',
      title: 'Design System',
      description: 'Access a complete library of premium components and design tokens for your projects.',
    },
    {
      icon: '🎬',
      title: 'Motion Assets',
      description: 'Create stunning animations with our cinematic motion graphics library.',
    },
    {
      icon: '🚀',
      title: 'Ship Faster',
      description: 'Build beautiful, consistent experiences across all platforms in less time.',
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={progressStyle}>
        {steps.map((_, index) => (
          <div key={index} style={dotStyle(index === currentStep)} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          style={contentStyle}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            style={iconContainerStyle}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle, ${colors.primary[500]}40 0%, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span style={{ position: 'relative', zIndex: 10 }}>{steps[currentStep].icon}</span>
          </motion.div>

          <div>
            <h2 style={titleStyle}>{steps[currentStep].title}</h2>
            <p style={descriptionStyle}>{steps[currentStep].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={currentStep === steps.length - 1 ? undefined : handleNext}
        >
          {currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}
        </Button>
        {currentStep > 0 && (
          <Button variant="ghost" size="md" fullWidth onClick={handlePrev}>
            Back
          </Button>
        )}
      </div>
    </div>
  );
};
