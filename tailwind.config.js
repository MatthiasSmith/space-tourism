module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: 'hsl(230, 35%, 7%)',
        borderGray: 'hsl(231, 15%, 26%)',
        lightPurple: 'hsl(231, 77%, 90%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        bellefair: 'Bellefair',
        barlow: 'Barlow',
        barlowCondensed: 'Barlow Condensed',
      },
      fontSize: {
        'mobile-heading-1': ['5rem', '6.25rem'],
        'heading-1': ['9.375rem', '10.75rem'],
        'heading-2': ['6.25rem', '7.1875rem'],
        'heading-3': ['3.5rem', '4rem'],
        'heading-4': ['2rem', '2.3125rem'],
        'heading-5': [
          '1.75rem',
          { lineHeight: '2.125rem', letterSpacing: '4.725px' },
        ],
        'mobile-sub-heading-1': [
          '1rem',
          { lineHeight: '1.1875rem', letterSpacing: '2.7px' },
        ],
        'mobile-base': ['0.9375rem', '1.5625rem'],
        'sub-heading-1': ['2.125rem', '2rem'],
        'sub-heading-2': [
          '0.875rem',
          { lineHeight: '1.0625rem', letterSpacing: '2.3625px' },
        ],
      },
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}
