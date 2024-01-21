/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '100': '25rem',  // 400px
        '120': '30rem',  // 480px
        '130': '32.5rem',  // 520px
        '140': '35rem',  // 560px
        '160': '40rem',  // 640px
        '180': '45rem',  // 720px
        '200': '50rem',  // 800px
      },
    },
  },
  plugins: [],
}
