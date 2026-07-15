/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e8f4fd',
          100: '#c5e3f9',
          200: '#9dcff4',
          300: '#6ab8ee',
          400: '#3da5e8',
          500: '#1a8fd1',
          600: '#1470a8',
          700: '#0f5280',
          800: '#0a3657',
          900: '#051c2e',
        },
        accent: '#00d4aa',
        dark: {
          bg:   '#0a0f1e',
          card: '#111827',
          nav:  '#0d1425',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
