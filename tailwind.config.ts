
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic: {
					DEFAULT: '#6E59A5',
					dark: '#1A1F2C',
					light: '#9b87f5',
					accent: '#E5DEFF',
					silver: '#9F9EA1',
					charcoal: '#403E43'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'twinkle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' },
				},
				'shooting-star': {
					'0%': { transform: 'translateX(-100%) translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'100%': { transform: 'translateX(100vw) translateY(100vh)', opacity: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(229, 222, 255, 0.5))' },
					'50%': { filter: 'drop-shadow(0 0 20px rgba(229, 222, 255, 0.8))' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'twinkle-slow': 'twinkle 6s ease-in-out infinite',
				'twinkle-fast': 'twinkle 2s ease-in-out infinite',
				'shooting-star': 'shooting-star 6s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite'
			},
			backgroundImage: {
				'cosmic-gradient': 'linear-gradient(90deg, rgba(26, 31, 44, 1) 0%, rgba(110, 89, 165, 0.8) 100%)',
				'nebula-gradient': 'linear-gradient(to right, #1A1F2C 0%, #6E59A5 50%, #9b87f5 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
