import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius } from '../styles/tokens';
import { StatCard } from '../components/StatCard';

export const MobileDashboard = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '420px',
    margin: '0 auto',
    minHeight: '100vh',
    background: colors.background.primary,
    padding: spacing[6],
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: spacing[8],
  };

  const greetingStyle: React.CSSProperties = {
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
    marginBottom: spacing[1],
  };

  const nameStyle: React.CSSProperties = {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    marginBottom: spacing[4],
    marginTop: spacing[8],
  };

  const statsGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: spacing[4],
  };

  const quickActionsStyle: React.CSSProperties = {
    display: 'flex',
    gap: spacing[3],
    overflowX: 'auto',
    paddingBottom: spacing[2],
  };

  const actionCardStyle: React.CSSProperties = {
    minWidth: '140px',
    background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.primary[700]} 100%)`,
    borderRadius: borderRadius.lg,
    padding: spacing[5],
    textAlign: 'center',
    cursor: 'pointer',
  };

  const recentActivityStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[3],
  };

  const activityItemStyle: React.CSSProperties = {
    display: 'flex',
    gap: spacing[3],
    alignItems: 'center',
    padding: spacing[4],
    background: colors.background.elevated,
    borderRadius: borderRadius.md,
    border: `1px solid ${colors.neutral[800]}`,
  };

  const activityIconStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: borderRadius.md,
    background: `linear-gradient(135deg, ${colors.primary[500]}30 0%, ${colors.accent[500]}30 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: typography.fontSize.xl,
  };

  const quickActions = [
    { icon: '➕', label: 'New Project', color: colors.primary[500] },
    { icon: '📊', label: 'Analytics', color: colors.accent[500] },
    { icon: '⚙️', label: 'Settings', color: colors.secondary[500] },
  ];

  const recentActivities = [
    { icon: '🎨', title: 'Design System Updated', time: '2m ago', type: 'success' },
    { icon: '🔧', title: 'Components Modified', time: '1h ago', type: 'info' },
    { icon: '🚀', title: 'Project Deployed', time: '3h ago', type: 'success' },
    { icon: '📝', title: 'Documentation Added', time: '5h ago', type: 'info' },
  ];

  return (
    <div style={containerStyle}>
      <motion.div
        style={headerStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={greetingStyle}>Welcome back,</div>
        <div style={nameStyle}>Designer</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div style={statsGridStyle}>
          <StatCard label="Projects" value="12" change={{ value: 8, positive: true }} icon="📁" />
          <StatCard label="Components" value="48" change={{ value: 12, positive: true }} icon="🧩" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div style={sectionTitleStyle}>Quick Actions</div>
        <div style={quickActionsStyle}>
          {quickActions.map((action, index) => (
            <motion.div
              key={action.label}
              style={actionCardStyle}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <div style={{ fontSize: typography.fontSize['3xl'], marginBottom: spacing[2] }}>
                {action.icon}
              </div>
              <div
                style={{
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.medium,
                  color: colors.text.primary,
                }}
              >
                {action.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div style={sectionTitleStyle}>Recent Activity</div>
        <div style={recentActivityStyle}>
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              style={activityItemStyle}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            >
              <div style={activityIconStyle}>{activity.icon}</div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.medium,
                    color: colors.text.primary,
                    marginBottom: spacing[1],
                  }}
                >
                  {activity.title}
                </div>
                <div
                  style={{
                    fontSize: typography.fontSize.xs,
                    color: colors.text.tertiary,
                  }}
                >
                  {activity.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
