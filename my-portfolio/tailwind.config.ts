import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			accent: '#fba087',
			secondary: "#202025",
			fore: "#ededed"
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  		},
		fontFamily: {
			jetbrains: ['"JetBrains Mono"', '"monospace"'],
		}
  	},
  	screens: {
		xs: '375px',
		mid_sm: '400px',
  		sm: '425px',
		mid_md: '500px',
  		md: '768px',
		mid_lg: '850px',
  		lg: '1024px',
		mid_xl: '1280px',
  		xl: '1440px'
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
