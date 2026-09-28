/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rs-black': '#0a0a0a',
        'rs-white': '#fafafa',
        'rs-gray': '#737373',
        'rs-orange': '#f4642e',
        'rs-light': '#f5f4f0',
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Instrument Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.75rem, 5.5vw, 5.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-sm': ['clamp(2rem, 3.8vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h1': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.75rem, 3.2vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65', letterSpacing: '-0.01em' }],
        'body-base': ['1rem', { lineHeight: '1.65', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'hero-label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.04em',
        'wider': '0.08em',
        'widest': '0.12em',
      },
      spacing: {
        'section': '8rem',
        'section-sm': '4rem',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
