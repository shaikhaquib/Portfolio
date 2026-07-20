/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070A0F',
          900: '#0B0F17',
          850: '#101623',
          800: '#141C2E',
          700: '#1E293B',
          600: '#334155',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          accent: '#00E676',
        },
        cyber: {
          400: '#38BDF8',
          500: '#06B6D4',
          600: '#0891B2',
          glow: '#00F0FF',
        },
        kotlin: {
          orange: '#F88909',
          purple: '#7F52FF',
          pink: '#C757BC',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)",
        'cyber-gradient': "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)",
        'kotlin-gradient': "linear-gradient(135deg, #7F52FF 0%, #C757BC 50%, #F88909 100%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
