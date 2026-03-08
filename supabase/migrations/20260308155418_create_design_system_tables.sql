/*
  # Design System Database Schema

  ## Overview
  Creates a comprehensive database structure for managing a futuristic AI brand design system
  that supports both UI components and motion graphics assets.

  ## New Tables

  ### 1. `design_tokens`
  Stores foundational design tokens (colors, typography, spacing, shadows, etc.)
  - `id` (uuid, primary key)
  - `category` (text) - token category: color, typography, spacing, shadow, gradient, etc.
  - `name` (text) - token name
  - `value` (jsonb) - token value (flexible structure for different types)
  - `description` (text) - usage description
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `ui_components`
  Stores UI component definitions and specifications
  - `id` (uuid, primary key)
  - `name` (text) - component name
  - `category` (text) - button, input, card, navigation, etc.
  - `description` (text) - component purpose and usage
  - `states` (jsonb) - available states (default, hover, active, disabled, etc.)
  - `props` (jsonb) - component properties and variants
  - `usage_notes` (text) - implementation guidelines
  - `mobile_specs` (jsonb) - mobile-specific specifications
  - `web_specs` (jsonb) - web-specific specifications
  - `motion_behavior` (text) - animation and interaction behavior
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `motion_assets`
  Stores motion graphics assets and animation specifications
  - `id` (uuid, primary key)
  - `name` (text) - asset name
  - `type` (text) - title_card, lower_third, transition, background_loop, etc.
  - `description` (text) - asset purpose
  - `visual_style` (text) - style description
  - `animation_behavior` (text) - animation details
  - `duration_ms` (integer) - recommended duration in milliseconds
  - `easing` (text) - easing function
  - `use_cases` (text[]) - where to use this asset
  - `asset_url` (text) - link to asset file
  - `thumbnail_url` (text) - preview thumbnail
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `screen_layouts`
  Stores example screen and page layouts
  - `id` (uuid, primary key)
  - `name` (text) - layout name
  - `type` (text) - landing_page, mobile_dashboard, web_dashboard, etc.
  - `platform` (text) - web, mobile, video
  - `description` (text) - layout description
  - `components_used` (uuid[]) - references to ui_components
  - `design_specs` (jsonb) - detailed specifications
  - `preview_url` (text) - preview image/video
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. `brand_guidelines`
  Stores brand guidelines and rules
  - `id` (uuid, primary key)
  - `category` (text) - visual_system, motion_principles, consistency_rules, etc.
  - `title` (text) - guideline title
  - `content` (text) - detailed guideline content
  - `examples` (jsonb) - visual examples and references
  - `priority` (integer) - importance level
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add policies for public read access (design system is viewable by all)
  - Add policies for authenticated admin users to manage content
*/

-- Create design_tokens table
CREATE TABLE IF NOT EXISTS design_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  name text NOT NULL,
  value jsonb NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(category, name)
);

-- Create ui_components table
CREATE TABLE IF NOT EXISTS ui_components (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  category text NOT NULL,
  description text,
  states jsonb DEFAULT '{}'::jsonb,
  props jsonb DEFAULT '{}'::jsonb,
  usage_notes text,
  mobile_specs jsonb DEFAULT '{}'::jsonb,
  web_specs jsonb DEFAULT '{}'::jsonb,
  motion_behavior text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create motion_assets table
CREATE TABLE IF NOT EXISTS motion_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  type text NOT NULL,
  description text,
  visual_style text,
  animation_behavior text,
  duration_ms integer,
  easing text DEFAULT 'ease-out',
  use_cases text[] DEFAULT '{}',
  asset_url text,
  thumbnail_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create screen_layouts table
CREATE TABLE IF NOT EXISTS screen_layouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  type text NOT NULL,
  platform text NOT NULL,
  description text,
  components_used uuid[] DEFAULT '{}',
  design_specs jsonb DEFAULT '{}'::jsonb,
  preview_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create brand_guidelines table
CREATE TABLE IF NOT EXISTS brand_guidelines (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  examples jsonb DEFAULT '{}'::jsonb,
  priority integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE design_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE ui_components ENABLE ROW LEVEL SECURITY;
ALTER TABLE motion_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE screen_layouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_guidelines ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Anyone can view design tokens"
  ON design_tokens FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view UI components"
  ON ui_components FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view motion assets"
  ON motion_assets FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view screen layouts"
  ON screen_layouts FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view brand guidelines"
  ON brand_guidelines FOR SELECT
  TO public
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_design_tokens_category ON design_tokens(category);
CREATE INDEX IF NOT EXISTS idx_ui_components_category ON ui_components(category);
CREATE INDEX IF NOT EXISTS idx_motion_assets_type ON motion_assets(type);
CREATE INDEX IF NOT EXISTS idx_screen_layouts_type ON screen_layouts(type);
CREATE INDEX IF NOT EXISTS idx_brand_guidelines_category ON brand_guidelines(category);
