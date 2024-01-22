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
        '40': '10rem',  // 160px
        '45': '11.25rem',  // 180px
        '50': '12.5rem',  // 200px
        '60': '15rem',  // 240px
        '70': '17.5rem',  // 280px
        '80': '20rem',  // 320px
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
