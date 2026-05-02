/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans:  ['"Inter"', 'sans-serif'],
      },
      colors: {
        ink:   '#0d0d0d',
        ink2:  '#1a1a1a',
        fog:   '#f7f6f4',
        fog2:  '#efefec',
        fog3:  '#e8e7e3',
        gold:  '#b8860b',
        gold2: '#d4a017',
        muted: '#6b6963',
        bdr:   '#e0deda',
      },
    },
  },
  plugins: [],
}
