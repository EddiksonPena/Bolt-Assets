import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { Card } from '../components/Card';
import { StatCard } from '../components/StatCard';
import { Navigation } from '../components/Navigation';

export const WebDashboard = () => {
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

  const statsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: spacing[6],
    marginBottom: spacing[12],
  };

  const chartsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: spacing[6],
    marginBottom: spacing[12],
  };

  const chartCardStyle: React.CSSProperties = {
    padding: spacing[8],
  };

  const chartTitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing[6],
  };

  const chartPlaceholderStyle: React.CSSProperties = {
    height: '300px',
    background: `linear-gradient(135deg, ${colors.primary[900]} 0%, ${colors.primary[950]} 100%)`,
    borderRadius: borderRadius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const chartLineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    background: `linear-gradient(180deg, ${colors.primary[500]}40 0%, ${colors.primary[500]}10 100%)`,
    clipPath: 'polygon(0 50%, 10% 45%, 20% 55%, 30% 40%, 40% 60%, 50% 35%, 60% 50%, 70% 30%, 80% 45%, 90% 25%, 100% 40%, 100% 100%, 0 100%)',
  };

  const recentProjectsStyle: React.CSSProperties = {
    marginBottom: spacing[12],
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing[6],
  };

  const projectsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing[6],
  };

  const projectCardContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[4],
  };

  const projectHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[3],
  };

  const projectIconStyle: React.CSSProperties = {
    width: '48px',
    height: '48px',
    borderRadius: borderRadius.md,
    background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.accent[500]} 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.fontSize.xl,
  };

  const progressBarStyle: React.CSSProperties = {
    height: '6px',
    background: colors.neutral[800],
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  };

  const progressFillStyle = (progress: number): React.CSSProperties => ({
    height: '100%',
    width: `${progress}%`,
    background: `linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.accent[500]} 100%)`,
    transition: 'width 0.5s ease',
  });

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects', href: '/projects' },
    { label: 'Components', href: '/components' },
    { label: 'Analytics', href: '/analytics' },
  ];

  const projects = [
    { name: 'Design System v2', icon: '🎨', progress: 85, tasks: '12/15' },
    { name: 'Mobile App UI', icon: '📱', progress: 60, tasks: '8/14' },
    { name: 'Marketing Website', icon: '🌐', progress: 45, tasks: '5/11' },
    { name: 'Motion Graphics', icon: '🎬', progress: 92, tasks: '22/24' },
  ];

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
          <h1 style={titleStyle}>Dashboard Overview</h1>
          <p style={subtitleStyle}>Monitor your design system performance and usage</p>
        </motion.div>

        <motion.div
          style={statsGridStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StatCard label="Total Projects" value="24" change={{ value: 15, positive: true }} icon="📁" />
          <StatCard label="Components" value="156" change={{ value: 8, positive: true }} icon="🧩" />
          <StatCard label="Active Users" value="1.2k" change={{ value: 23, positive: true }} icon="👥" />
          <StatCard label="Deployments" value="48" change={{ value: 5, positive: false }} icon="🚀" />
        </motion.div>

        <motion.div
          style={chartsGridStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card variant="glass" padding="lg">
            <div style={chartCardStyle}>
              <h3 style={chartTitleStyle}>Usage Analytics</h3>
              <div style={chartPlaceholderStyle}>
                <motion.div
                  style={chartLineStyle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    color: colors.text.tertiary,
                    fontSize: typography.fontSize.sm,
                  }}
                >
                  Interactive Chart Area
                </div>
              </div>
            </div>
          </Card>

          <Card variant="glass" padding="lg">
            <div style={chartCardStyle}>
              <h3 style={chartTitleStyle}>Component Usage</h3>
              <div style={chartPlaceholderStyle}>
                <motion.div
                  style={{
                    ...chartLineStyle,
                    clipPath:
                      'polygon(0 70%, 10% 65%, 20% 75%, 30% 60%, 40% 80%, 50% 55%, 60% 70%, 70% 50%, 80% 65%, 90% 45%, 100% 60%, 100% 100%, 0 100%)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    color: colors.text.tertiary,
                    fontSize: typography.fontSize.sm,
                  }}
                >
                  Interactive Chart Area
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          style={recentProjectsStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 style={sectionTitleStyle}>Recent Projects</h2>
          <div style={projectsGridStyle}>
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Card hover>
                  <div style={projectCardContentStyle}>
                    <div style={projectHeaderStyle}>
                      <div style={projectIconStyle}>{project.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontSize: typography.fontSize.lg,
                            fontWeight: typography.fontWeight.semibold,
                            color: colors.text.primary,
                            marginBottom: spacing[1],
                          }}
                        >
                          {project.name}
                        </div>
                        <div
                          style={{
                            fontSize: typography.fontSize.sm,
                            color: colors.text.tertiary,
                          }}
                        >
                          {project.tasks} tasks completed
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: spacing[2],
                        }}
                      >
                        <span style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>
                          Progress
                        </span>
                        <span
                          style={{
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.semibold,
                            color: colors.primary[400],
                          }}
                        >
                          {project.progress}%
                        </span>
                      </div>
                      <div style={progressBarStyle}>
                        <motion.div
                          style={progressFillStyle(project.progress)}
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
