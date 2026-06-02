import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          deep: '#060E1A',
          mid: '#0F2040',
          light: '#1A3355',
        },
        silver: {
          DEFAULT: '#9EB3C8',
          light: '#DCE8F5',
          dim: '#6A8EAA',
          pale: '#EBF2F8',
        },
        ink: '#0A1628',
        ivory: '#F0F4F8',
        stone: '#E2EAF2',
        slate: '#4A6A8A',
        rule: '#C5D5E8',
        brass: '#9EB3C8',
        'brass-light': '#DCE8F5',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        baskerville: ['var(--font-baskerville)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(52px, 7vw, 88px)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'headline': ['clamp(36px, 4.5vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'title': ['clamp(26px, 3vw, 36px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'subtitle': ['clamp(20px, 2.2vw, 24px)', { lineHeight: '1.35', letterSpacing: '-0.005em' }],
        'body-lg': ['18px', { lineHeight: '1.75' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'label': ['12px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'reading': '68ch',
        'content': '1280px',
      },
      animation: {
        'count-up': 'countUp 2s ease-out forwards',
      },
      transitionTimingFunction: {
        'consulting': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}

export default config
