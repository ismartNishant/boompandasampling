const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#FFE0EC',
  				'100': '#FFB3D0',
  				'200': '#FF80B3',
  				'300': '#FF4D96',
  				'400': '#FF337D',
  				'500': '#ff102e',
  				'600': '#D1236F',
  				'700': '#A31C5A',
  				'800': '#751646',
  				'900': '#471031',
  				DEFAULT: '#ff102e',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#E4E0F9',
  				'100': '#C7BFF2',
  				'200': '#A499EA',
  				'300': '#806FE1',
  				'400': '#654DD9',
  				'500': '#4C24C1',
  				'600': '#421EA8',
  				'700': '#36188A',
  				'800': '#29126B',
  				'900': '#07011c',
  				DEFAULT: '#4C24C1',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			customGreen: {
  				'50': '#F2FBE4',
  				'100': '#DBF4B5',
  				'200': '#C3ED87',
  				'300': '#A8E55C',
  				'400': '#94DB3E',
  				'500': '#87E64B',
  				'600': '#6CC03D',
  				'700': '#559A31',
  				'800': '#3E7325',
  				'900': '#284D18',
  				DEFAULT: '#87E64B'
  			},
  			dark: {
  				'2': '#1d1d1f',
  				'3': '#4B5560',
  				'4': '#4B5563',
  				'5': '#6B7280',
  				'6': '#9CA3AF',
  				'7': '#D1D5DB',
  				'8': '#E5E7EB',
  				DEFAULT: '#111111'
  			},
  			gray: {
  				'1': '#F9FAFB',
  				'2': '#F3F4F6',
  				'3': '#E5E7EB',
  				'4': '#D1D5DB',
  				'5': '#9CA3AF',
  				'6': '#6B7280',
  				'7': '#374151',
  				DEFAULT: '#EFF4FB',
  				dark: '#111111'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		}
  	}
  },
  darkMode: ["class", 'class'],
  plugins: [nextui(), require("tailwindcss-animate")],
}
