module.exports = {
  // mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.vue', './src/**/*.ts']
  },
  theme: {
    fontFamily: {
      sans: ['Quicksand', '"Segoe UI"',  '"Helvetica Neue"', 'Arial', 'sans-serif'],
      mono: ['"Roboto Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    extend: {
      colors: {
        gray: {
          '1000': '#0e1420'
        }
      },
      borderWidth: {
        '1': '1px'
      },
      minHeight: {
        'main': 'calc(100vh - 64px)'
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        fadeOut: 'fadeOut 2s ease-in-out forwards'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  }
}
