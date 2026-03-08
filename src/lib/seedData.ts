import { supabase } from './supabase';
import { colors, typography, spacing, shadows, gradients, borderRadius, blur, transitions, easing } from '../styles/tokens';

export async function seedDesignTokens() {
  const tokens = [
    {
      category: 'color',
      name: 'primary-palette',
      value: colors.primary,
      description: 'Primary brand colors - Blue shades for main UI elements and interactive components',
    },
    {
      category: 'color',
      name: 'secondary-palette',
      value: colors.secondary,
      description: 'Secondary colors - Light blue accents for supporting elements',
    },
    {
      category: 'color',
      name: 'accent-palette',
      value: colors.accent,
      description: 'Accent colors - Warm orange/amber for emphasis and calls to action',
    },
    {
      category: 'color',
      name: 'neutral-palette',
      value: colors.neutral,
      description: 'Neutral grays for backgrounds, borders, and text',
    },
    {
      category: 'color',
      name: 'semantic-colors',
      value: { success: colors.success, warning: colors.warning, error: colors.error },
      description: 'Semantic colors for status indicators and feedback',
    },
    {
      category: 'typography',
      name: 'font-families',
      value: typography.fontFamily,
      description: 'Primary font stack using Inter for display and body text',
    },
    {
      category: 'typography',
      name: 'font-sizes',
      value: typography.fontSize,
      description: 'Type scale from xs to 8xl for hierarchical typography',
    },
    {
      category: 'typography',
      name: 'font-weights',
      value: typography.fontWeight,
      description: 'Weight scale from light to extrabold',
    },
    {
      category: 'spacing',
      name: 'spacing-scale',
      value: spacing,
      description: '8px-based spacing system for consistent layouts',
    },
    {
      category: 'shadow',
      name: 'elevation-shadows',
      value: shadows,
      description: 'Shadow system for depth and elevation, including glow effects',
    },
    {
      category: 'gradient',
      name: 'brand-gradients',
      value: gradients,
      description: 'Gradient presets for backgrounds, overlays, and accents',
    },
    {
      category: 'border-radius',
      name: 'radius-scale',
      value: borderRadius,
      description: 'Border radius scale from sharp to fully rounded',
    },
    {
      category: 'blur',
      name: 'blur-scale',
      value: blur,
      description: 'Blur values for glass morphism effects',
    },
    {
      category: 'animation',
      name: 'transitions',
      value: transitions,
      description: 'Timing presets for smooth transitions',
    },
    {
      category: 'animation',
      name: 'easing-functions',
      value: easing,
      description: 'Easing curves for natural motion',
    },
  ];

  const { error } = await supabase.from('design_tokens').insert(tokens);
  if (error) console.error('Error seeding tokens:', error);
  else console.log('Design tokens seeded successfully');
}

export async function seedUIComponents() {
  const components = [
    {
      name: 'Button',
      category: 'button',
      description: 'Primary interactive element for user actions',
      states: {
        default: 'Normal resting state',
        hover: 'Elevated with scale transformation',
        active: 'Pressed with reduced scale',
        disabled: 'Reduced opacity, no interaction',
        loading: 'Spinner or progress indicator',
      },
      props: {
        variant: ['primary', 'secondary', 'outline', 'ghost'],
        size: ['sm', 'md', 'lg'],
        fullWidth: 'boolean',
        disabled: 'boolean',
      },
      usage_notes: 'Use primary for main actions, secondary for alternatives, outline for tertiary actions, ghost for subtle interactions',
      mobile_specs: {
        minTouchTarget: '44px',
        padding: 'Increased for touch accuracy',
      },
      web_specs: {
        minWidth: '80px',
        cursor: 'pointer',
      },
      motion_behavior: 'Scale on hover (1.02), scale on tap (0.98), smooth 150ms transition',
    },
    {
      name: 'Card',
      category: 'card',
      description: 'Container component for grouping related content',
      states: {
        default: 'Static container',
        hover: 'Lifts with shadow increase',
        selected: 'Border highlight',
        disabled: 'Reduced opacity',
      },
      props: {
        variant: ['default', 'elevated', 'glass'],
        padding: ['sm', 'md', 'lg'],
        hover: 'boolean - enable hover effect',
      },
      usage_notes: 'Use default for standard content, elevated for important items, glass for overlays',
      mobile_specs: {
        padding: 'Responsive based on screen size',
      },
      web_specs: {
        maxWidth: 'Can span grid columns',
      },
      motion_behavior: 'Lift on hover with -4px Y translation, shadow increases from lg to xl',
    },
    {
      name: 'Input',
      category: 'input',
      description: 'Text input field for user data entry',
      states: {
        default: 'Empty or filled',
        focus: 'Border highlights with glow',
        error: 'Red border with error message',
        disabled: 'Reduced opacity, no interaction',
      },
      props: {
        type: ['text', 'email', 'password', 'number', 'search'],
        placeholder: 'string',
        error: 'boolean',
        icon: 'ReactNode - left icon',
      },
      usage_notes: 'Always provide labels, use error state for validation feedback',
      mobile_specs: {
        fontSize: '16px minimum to prevent zoom',
        height: '44px minimum',
      },
      web_specs: {
        width: '100% of container',
      },
      motion_behavior: 'Smooth border color transition on focus, glow effect appears',
    },
    {
      name: 'StatCard',
      category: 'stats',
      description: 'Display metric with label, value, and change indicator',
      states: {
        default: 'Shows current value',
        hover: 'Lifts with animation',
        loading: 'Skeleton or spinner',
      },
      props: {
        label: 'string',
        value: 'string | number',
        change: '{ value: number, positive: boolean }',
        icon: 'ReactNode',
      },
      usage_notes: 'Use for dashboard metrics, analytics, and KPIs',
      mobile_specs: {
        stackable: 'In 2-column grid',
      },
      web_specs: {
        minWidth: '250px',
      },
      motion_behavior: 'Hover lift with glow pulse animation',
    },
    {
      name: 'Navigation',
      category: 'navigation',
      description: 'Top navigation bar with backdrop blur',
      states: {
        default: 'Fixed at top',
        scrolled: 'Background opacity increases',
      },
      props: {
        items: 'NavItem[]',
        logo: 'ReactNode',
        onItemClick: 'function',
      },
      usage_notes: 'Use for main site navigation, always accessible',
      mobile_specs: {
        hamburgerMenu: 'Collapsed on mobile',
      },
      web_specs: {
        fullWidth: 'Spans viewport',
      },
      motion_behavior: 'Item color transitions on hover, smooth 200ms',
    },
    {
      name: 'Toggle',
      category: 'input',
      description: 'Binary on/off switch control',
      states: {
        off: 'Gray background, knob left',
        on: 'Primary color, knob right',
        disabled: 'Reduced opacity',
      },
      props: {
        checked: 'boolean',
        onChange: 'function',
        label: 'string',
      },
      usage_notes: 'Use for settings and binary choices',
      mobile_specs: {
        minTouchTarget: '44px',
      },
      web_specs: {
        cursor: 'pointer',
      },
      motion_behavior: 'Spring animation for knob movement',
    },
    {
      name: 'Modal',
      category: 'overlay',
      description: 'Overlay dialog for focused interactions',
      states: {
        closed: 'Not rendered',
        opening: 'Fade in with scale',
        open: 'Fully visible',
        closing: 'Fade out with scale',
      },
      props: {
        isOpen: 'boolean',
        onClose: 'function',
        title: 'string',
        size: ['sm', 'md', 'lg', 'full'],
      },
      usage_notes: 'Use sparingly, ensure escape key closes, click outside to dismiss',
      mobile_specs: {
        fullscreen: 'On small screens',
      },
      web_specs: {
        centered: 'Vertically and horizontally',
      },
      motion_behavior: 'Backdrop fades in, content scales from 0.95 to 1',
    },
    {
      name: 'Toast',
      category: 'notification',
      description: 'Temporary notification message',
      states: {
        entering: 'Slide in from top',
        visible: 'Fully shown',
        exiting: 'Fade out',
      },
      props: {
        type: ['success', 'error', 'warning', 'info'],
        message: 'string',
        duration: 'number (ms)',
      },
      usage_notes: 'Auto-dismiss after duration, stack multiple toasts',
      mobile_specs: {
        fullWidth: 'With margin',
      },
      web_specs: {
        maxWidth: '400px',
      },
      motion_behavior: 'Slide down from top with bounce, fade out',
    },
    {
      name: 'Dropdown',
      category: 'input',
      description: 'Select from list of options',
      states: {
        closed: 'Shows selected value',
        open: 'Shows all options',
        hover: 'Highlight option',
      },
      props: {
        options: 'Array<{label, value}>',
        value: 'any',
        onChange: 'function',
        placeholder: 'string',
      },
      usage_notes: 'Use for 5+ options, searchable for many options',
      mobile_specs: {
        nativeSelect: 'Consider native on mobile',
      },
      web_specs: {
        maxHeight: '300px with scroll',
      },
      motion_behavior: 'Dropdown animates down with fade, options stagger in',
    },
    {
      name: 'Tabs',
      category: 'navigation',
      description: 'Switch between content sections',
      states: {
        default: 'Inactive tab',
        active: 'Highlighted with indicator',
        hover: 'Subtle highlight',
      },
      props: {
        tabs: 'Array<{label, content}>',
        defaultTab: 'number',
      },
      usage_notes: 'Use for related content that doesn\'t need simultaneous view',
      mobile_specs: {
        scrollable: 'Horizontal scroll if many tabs',
      },
      web_specs: {
        fullWidth: 'Tabs span width evenly',
      },
      motion_behavior: 'Active indicator slides smoothly, content fades and slides',
    },
  ];

  const { error } = await supabase.from('ui_components').insert(components);
  if (error) console.error('Error seeding components:', error);
  else console.log('UI components seeded successfully');
}

export async function seedMotionAssets() {
  const assets = [
    {
      name: 'Cinematic Title Card',
      type: 'title_card',
      description: 'Bold title card with gradient background sweep',
      visual_style: 'Large typography, gradient overlay, particle effects',
      animation_behavior: 'Text fades in from bottom with slight overshoot, background gradient sweeps left to right',
      duration_ms: 2000,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      use_cases: ['Video openings', 'Section intros', 'Chapter markers'],
    },
    {
      name: 'Minimal Title Reveal',
      type: 'title_card',
      description: 'Clean title with line animation',
      visual_style: 'Simple typography, thin accent line, minimal elements',
      animation_behavior: 'Line draws from left to right, text fades in simultaneously',
      duration_ms: 1500,
      easing: 'ease-out',
      use_cases: ['Explainer videos', 'Tutorials', 'Corporate content'],
    },
    {
      name: 'Modern Lower Third',
      type: 'lower_third',
      description: 'Glass morphism lower third with slide animation',
      visual_style: 'Frosted glass background, subtle border, left accent bar',
      animation_behavior: 'Slides in from left with ease-out, holds for duration, slides out to left',
      duration_ms: 800,
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      use_cases: ['Speaker names', 'Location tags', 'Info overlays'],
    },
    {
      name: 'Tech Lower Third',
      type: 'lower_third',
      description: 'Futuristic lower third with geometric accents',
      visual_style: 'Angular shapes, glowing edges, tech aesthetic',
      animation_behavior: 'Pieces assemble from right with stagger, glow pulses',
      duration_ms: 1000,
      easing: 'ease-in-out',
      use_cases: ['Tech content', 'Gaming', 'Sci-fi themes'],
    },
    {
      name: 'Gradient Wipe',
      type: 'transition',
      description: 'Directional gradient transition',
      visual_style: 'Smooth gradient from primary to accent colors',
      animation_behavior: 'Gradient wipes across screen from left to right',
      duration_ms: 600,
      easing: 'ease-in-out',
      use_cases: ['Scene changes', 'Topic transitions', 'Segment breaks'],
    },
    {
      name: 'Particle Dissolve',
      type: 'transition',
      description: 'Particle-based transition effect',
      visual_style: 'Small particles that scatter and reform',
      animation_behavior: 'Current scene breaks into particles, new scene forms from particles',
      duration_ms: 800,
      easing: 'ease-out',
      use_cases: ['Creative transitions', 'Tech reveals', 'Modern aesthetics'],
    },
    {
      name: 'Zoom Blur',
      type: 'transition',
      description: 'Radial zoom with motion blur',
      visual_style: 'Center-focused zoom with blur trails',
      animation_behavior: 'Scene zooms and blurs out from center, new scene zooms in',
      duration_ms: 500,
      easing: 'ease-in-out',
      use_cases: ['Impact moments', 'Focus shifts', 'Emphasis'],
    },
    {
      name: 'Kinetic Typography - Build',
      type: 'kinetic_typography',
      description: 'Words build character by character',
      visual_style: 'Bold sans-serif, staggered entrance',
      animation_behavior: 'Characters appear sequentially with slight scale bounce',
      duration_ms: 1200,
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      use_cases: ['Key phrases', 'Quotes', 'Emphasis text'],
    },
    {
      name: 'Kinetic Typography - Wave',
      type: 'kinetic_typography',
      description: 'Text moves in wave pattern',
      visual_style: 'Fluid motion, rhythmic',
      animation_behavior: 'Characters move up and down in sequence creating wave effect',
      duration_ms: 2000,
      easing: 'ease-in-out',
      use_cases: ['Music videos', 'Creative content', 'Rhythmic visuals'],
    },
    {
      name: 'Animated Grid Background',
      type: 'background_loop',
      description: 'Infinite grid with subtle movement',
      visual_style: 'Thin grid lines, depth perspective',
      animation_behavior: 'Grid moves toward viewer creating depth, loops seamlessly',
      duration_ms: 10000,
      easing: 'linear',
      use_cases: ['Background fill', 'Tech aesthetic', 'Continuous play'],
    },
    {
      name: 'Particle Field',
      type: 'background_loop',
      description: 'Floating particles with parallax',
      visual_style: 'Small glowing dots, various sizes',
      animation_behavior: 'Particles float randomly with slight drift, loop seamlessly',
      duration_ms: 20000,
      easing: 'ease-in-out',
      use_cases: ['Ambient backgrounds', 'Space themes', 'Abstract visuals'],
    },
    {
      name: 'Data Chart Animate',
      type: 'data_visualization',
      description: 'Bar chart with build animation',
      visual_style: 'Clean bars with gradient fill',
      animation_behavior: 'Bars grow from bottom to target height with ease-out',
      duration_ms: 1000,
      easing: 'cubic-bezier(0, 0, 0.2, 1)',
      use_cases: ['Statistics', 'Reports', 'Data presentations'],
    },
    {
      name: 'Circular Progress',
      type: 'progress_indicator',
      description: 'Circular loading indicator',
      visual_style: 'Stroke-based circle with gradient',
      animation_behavior: 'Stroke draws clockwise, infinite rotation if indeterminate',
      duration_ms: 1500,
      easing: 'ease-in-out',
      use_cases: ['Loading states', 'Progress tracking', 'Completion indicators'],
    },
    {
      name: 'Brand Intro Sequence',
      type: 'intro',
      description: 'Full brand introduction animation',
      visual_style: 'Logo reveal, gradient background, particle effects',
      animation_behavior: 'Logo pieces assemble, brand name fades in, particles burst',
      duration_ms: 3000,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      use_cases: ['Video openings', 'Brand presentations', 'Channel intros'],
    },
    {
      name: 'Outro with CTA',
      type: 'outro',
      description: 'End screen with call to action',
      visual_style: 'Clean layout, social icons, subscribe prompt',
      animation_behavior: 'Elements slide in from sides, CTA button pulses',
      duration_ms: 2500,
      easing: 'ease-out',
      use_cases: ['Video endings', 'Channel outros', 'CTA screens'],
    },
  ];

  const { error } = await supabase.from('motion_assets').insert(assets);
  if (error) console.error('Error seeding motion assets:', error);
  else console.log('Motion assets seeded successfully');
}

export async function seedBrandGuidelines() {
  const guidelines = [
    {
      category: 'visual_system',
      title: 'Color Philosophy',
      content: `Our color system is built on clarity, depth, and sophistication.

Primary Blue: Represents intelligence, trust, and innovation. Use for primary actions and key UI elements.

Accent Amber: Brings warmth and energy. Use sparingly for emphasis and calls to action.

Neutral Grays: Provide structure and hierarchy without distraction.

Always maintain sufficient contrast (4.5:1 minimum for text). Use semantic colors consistently for status feedback.`,
      priority: 10,
    },
    {
      category: 'visual_system',
      title: 'Typography Hierarchy',
      content: `Use Inter font family across all platforms for consistency.

Display sizes (4xl-8xl): Hero headlines, major section titles
Body sizes (base-2xl): Content, descriptions, UI labels
Small sizes (xs-sm): Captions, metadata, helper text

Maintain line height of 1.2 for headings, 1.5 for body text. Never use more than 3 font weights in a single design.`,
      priority: 9,
    },
    {
      category: 'motion_principles',
      title: 'Animation Speed & Easing',
      content: `Speed: Fast (150ms) for micro-interactions, Base (200ms) for UI transitions, Slow (300-500ms) for major state changes.

Easing: Use ease-out for entrances (objects decelerating), ease-in for exits (objects accelerating away), ease-in-out for movements and transformations.

Spring easing adds playful energy - use for delightful moments, not frequently.`,
      priority: 8,
    },
    {
      category: 'motion_principles',
      title: 'Entrance & Exit Patterns',
      content: `Entrances: Fade in + subtle upward movement (20px). Creates natural, grounded feeling.

Exits: Fade out + slight downward movement or scale down. Quick and clean.

Group animations: Stagger timing by 50-100ms for sequential reveals.

Motion should feel purposeful, not arbitrary. Every animation should aid comprehension or provide feedback.`,
      priority: 8,
    },
    {
      category: 'consistency_rules',
      title: 'Cross-Platform Color Usage',
      content: `Colors must be identical across UI and motion graphics.

Primary blue (#0075e6) is the hero color everywhere - navigation highlights, CTAs, key elements in videos.

Accent amber for emphasis only - never as primary color.

Backgrounds: Pure black (#000000) or near-black (#0a0a0a) for consistency.

Glass effects: rgba(26,26,26,0.6) with 12px blur - identical in UI cards and video overlays.`,
      priority: 10,
    },
    {
      category: 'consistency_rules',
      title: 'Shared Shape Language',
      content: `Border radius: Cards and buttons use lg (1rem), modals use xl (1.5rem). Video elements match exactly.

Spacing: 8px base unit everywhere. If padding is 24px in UI, video elements use 24px too.

Proportions: Maintain 16:9 aspect ratio for video content, match in UI where relevant.`,
      priority: 7,
    },
    {
      category: 'consistency_rules',
      title: 'Icon & Illustration Style',
      content: `Line-based icons, 2px stroke weight, rounded caps.

Minimal, geometric illustrations with gradients.

Same icon set across product and video - no style mixing.

Icons should be recognizable at 20px minimum size.`,
      priority: 6,
    },
    {
      category: 'asset_production',
      title: 'File Organization',
      content: `Structure:
/design-tokens - JSON exports of all tokens
/components-ui - Individual component specs
/components-motion - Motion graphics templates
/assets-icons - SVG icon library
/assets-illustrations - Illustration files
/exports-web - Optimized for web
/exports-mobile - Optimized for mobile
/exports-video - Video-ready renders

Naming: kebab-case for all files. Version with v1, v2 suffixes.`,
      priority: 5,
    },
    {
      category: 'asset_production',
      title: 'Export Guidelines',
      content: `Web: SVG for icons/illustrations, WebP for images, inline critical CSS.

Mobile: 1x, 2x, 3x assets. Vector PDFs where possible.

Video: ProRes 422 for motion graphics masters. H.264 for final delivery. 1920x1080 minimum. 60fps for smooth motion.

Always include alpha channel for overlay elements.`,
      priority: 5,
    },
  ];

  const { error } = await supabase.from('brand_guidelines').insert(guidelines);
  if (error) console.error('Error seeding guidelines:', error);
  else console.log('Brand guidelines seeded successfully');
}

export async function seedAllData() {
  console.log('Starting data seed...');
  await seedDesignTokens();
  await seedUIComponents();
  await seedMotionAssets();
  await seedBrandGuidelines();
  console.log('All data seeded successfully!');
}
