import {createTheme} from '@shopify/restyle'

const palette = {
  beige: '#DDBEA9',
  black: '#0B0B0B',
  white: '#F0F2F3',
  light: '#e5e5e5',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.beige,
    black: palette.black,
    details: palette.light
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    header: {
      fontFamily: 'System',
      fontWeight: 'bold',
      fontSize: 32,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontFamily: 'ShopifySans-SemiBold',
      fontWeight: '600',
      fontSize: 24,
      lineHeight: 36,
      color: 'black',
    },
    title: {
      fontFamily: 'ShopifySans',
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 24,
      color: 'black',
    },
    body: {
      fontFamily: 'ShopifySans',
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
  },
});

export type Theme = typeof theme;
export default theme;
