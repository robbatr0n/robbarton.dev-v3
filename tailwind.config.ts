/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				offwhite: '#EEE8D5',
				offwhite2: '#FDF6E3',
				title: '#268BD2',
			},
			fontFamily: {
				sans: ['var(--font-inter)'],
				mono: ['var(--font-space_mono)'],
			},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
