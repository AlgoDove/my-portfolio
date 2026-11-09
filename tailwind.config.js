/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#0C0B14',
        midnight: '#171426',
        surface: {
          DEFAULT: '#27213A',
          subtle: '#1D1930',
          elevated: '#31294A',
          border: 'rgba(169, 135, 245, 0.15)',
          'border-strong': 'rgba(169, 135, 245, 0.3)',
        },
        primary: {
          text: '#F4F0FA',
        },
        muted: {
          text: '#AAA2B9',
          dim: '#7E768E',
        },
        accent: {
          violet: '#A987F5',
          rose: '#D77CCB',
          cyan: '#79C9DF',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-very-slow': 'spin 40s linear infinite',
      },
    },
  },
  plugins: [],
}
