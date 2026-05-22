import type { Config } from 'tailwindcss'

// Define TeamVibe color palette
const teamVibeColors = {
  // Primary
  primary: '#904d00',
  'primary-container': '#ff8c00',
  'on-primary': '#ffffff',
  'on-primary-container': '#623200',
  'primary-fixed': '#ffdcc3',
  'primary-fixed-dim': '#ffb77d',
  'on-primary-fixed': '#2f1500',
  'on-primary-fixed-variant': '#6e3900',

  // Secondary
  secondary: '#705d00',
  'secondary-container': '#fcd400',
  'on-secondary': '#ffffff',
  'on-secondary-container': '#6e5c00',
  'secondary-fixed': '#ffe16d',
  'secondary-fixed-dim': '#e9c400',
  'on-secondary-fixed': '#221b00',
  'on-secondary-fixed-variant': '#544600',

  // Tertiary
  tertiary: '#006e1c',
  'tertiary-container': '#5bbe5d',
  'on-tertiary': '#ffffff',
  'on-tertiary-container': '#004910',
  tertiaryFixed: '#94f990',
  'tertiary-fixed-dim': '#78dc77',
  'on-tertiary-fixed': '#002204',
  'on-tertiary-fixed-variant': '#005313',

  // Error
  error: '#ba1a1a',
  'error-container': '#ffdad6',
  'on-error': '#ffffff',
  'on-error-container': '#93000a',

  // Surface & Background
  background: '#f9f9f9',
  surface: '#f9f9f9',
  'surface-bright': '#f9f9f9',
  'surface-dim': '#dadada',
  'surface-container-lowest': '#ffffff',
  'surface-container-low': '#f3f3f3',
  'surface-container': '#eeeeee',
  'surface-container-high': '#e8e8e8',
  'surface-container-highest': '#e2e2e2',
  'surface-variant': '#e2e2e2',
  'on-surface': '#1a1c1c',
  'on-surface-variant': '#564334',

  // Inverse
  inverseSurface: '#2f3131',
  'inverse-surface': '#2f3131',
  'inverse-on-surface': '#f1f1f1',
  'inverse-primary': '#ffb77d',

  // Outline
  outline: '#897362',
  'outline-variant': '#ddc1ae',
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: teamVibeColors,
      borderColor: teamVibeColors,

      borderRadius: {
        'sm': '0.5rem',
        'DEFAULT': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        'full': '9999px',
      },

      spacing: {
        'base': '8px',
        'xs': '4px',
        'sm': '12px',
        'md': '24px',
        'lg': '40px',
        'xl': '64px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'margin-desktop': '32px',
      },

      fontFamily: {
        'display-lg': ['Montserrat', 'sans-serif'],
        'headline-lg': ['Montserrat', 'sans-serif'],
        'headline-lg-mobile': ['Montserrat', 'sans-serif'],
        'headline-md': ['Montserrat', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-md': ['Inter', 'sans-serif'],
      },

      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
      },

      boxShadow: {
        'ambient': '0 4px 20px rgba(144, 77, 0, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glow-orange': '0 0 8px rgba(255, 140, 0, 0.5)',
      },

      animation: {
        'pulse-green': 'pulse-green 2s infinite',
      },

      keyframes: {
        'pulse-green': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 6px rgba(34, 197, 94, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
