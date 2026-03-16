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
        primary: {
          DEFAULT: '#006FFF',
          dark: '#0A2B43',
          light: '#EBF3FF',
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#A8CCFF',
          300: '#70AAFF',
          400: '#3D8FFF',
          500: '#006FFF',
          600: '#005CD6',
          700: '#0047A8',
          800: '#002D4D',
          900: '#0A2B43',
        },
        navy: {
          DEFAULT: '#0A2B43',
          light: '#002D4D',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#888888',
          500: '#6B7280',
          600: '#444444',
          700: '#333333',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
