/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAF8F5',
          muted: '#F3EFEA',
          subtle: '#EDE8E1',
          pure: '#FFFFFF',
        },
        charcoal: {
          DEFAULT: '#1C1B1A',
          light: '#2D2B2A',
          muted: '#52504D',
          faint: '#85827D',
        },
        sage: {
          DEFAULT: '#5B6E58',
          dark: '#455443',
          light: '#849681',
          subtle: '#E8EFE7',
        },
        sunset: {
          DEFAULT: '#D96B43',
          hover: '#C25932',
          light: '#F7ECE7',
          subtle: '#FBF2EE',
        },
        slateTone: {
          DEFAULT: '#7B888F',
          subtle: '#EEF2F4',
          border: '#DCE2E5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(28, 27, 26, 0.07), 0 0 1px 1px rgba(28, 27, 26, 0.05)',
        'floating': '0 30px 60px -12px rgba(0, 0, 0, 0.18), 0 18px 36px -18px rgba(0, 0, 0, 0.12)',
        'card': '0 4px 20px -2px rgba(28, 27, 26, 0.05)',
      },
      letterSpacing: {
        'widest-caps': '0.22em',
      }
    },
  },
  plugins: [],
}
