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
        obsidian: '#131210',
        walnut: {
          DEFAULT: '#4A3729',
          dark: '#38291E',
          light: '#5E4634',
        },
        charcoal: {
          DEFAULT: '#191715',
          light: '#23201D',
          border: '#332D28',
        },
        caramel: {
          light: '#A67746',
          DEFAULT: '#92683E',
          dark: '#7A542F',
          brand: '#96673B',
        },
        sand: {
          DEFAULT: '#CFB898',
          light: '#DFCCA9',
          dark: '#BFA887',
        },
        gold: {
          light: '#DFCCA9',
          DEFAULT: '#92683E',
          dark: '#7A542F',
        },
        cream: {
          DEFAULT: '#F2E7D5',
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
        'luxury-gradient': 'radial-gradient(ellipse at top, rgba(146, 104, 62, 0.16) 0%, rgba(19, 18, 16, 0.98) 75%)',
        'wood-shimmer': 'linear-gradient(90deg, transparent, rgba(207, 184, 152, 0.22), transparent)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(207, 184, 152, 0.22), transparent)',
      },
    },
  },
  plugins: [],
};
export default config;
