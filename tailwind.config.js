/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    colors: {
      // 'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'blue': {
        '50': '#edf9ff',
        '100': '#d7f0ff',
        '200': '#b9e6ff',
        '300': '#88d8ff',
        '400': '#50c1ff',
        '500': '#28a1ff',
        '600': '#1f8bff',
        '700': '#0a6beb',
        '800': '#0f56be',
        '900': '#134b95',
        '950': '#112e5a',
      },

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      invalid: {
        'input, textarea, select': '&:invalid',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}