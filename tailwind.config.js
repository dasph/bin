module.exports = {
  // mode: 'jit',
  // purge: ['./src/**/*.vue'],
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
