import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0E13',
        charcoal: {
          DEFAULT: '#10141A',
          light: '#181E27',
          border: '#222B38',
        },
        caramel: {
          light: '#B27D56',
          DEFAULT: '#8F5D38',
          dark: '#704830',
        },
        gold: {
          light: '#F3E5AB',
          DEFAULT: '#D4AF37',
          dark: '#997D25',
        },
        cream: {
          DEFAULT: '#F5ECE1',
          muted: '#DCD4C9',
        },
        stone: {
          sand: '#E6E4DE',
          slate: '#8A939E',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'serif'],
        arabic: ['var(--font-arabic)', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'radial-gradient(ellipse at top, rgba(143, 93, 56, 0.15) 0%, rgba(11, 14, 19, 0.95) 75%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.25), transparent)',
      },
    },
  },
  plugins: [],
};
export default config;
