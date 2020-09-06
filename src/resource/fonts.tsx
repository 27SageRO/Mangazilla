import {Platform} from 'react-native';

const robotoWeights: any = {
  thin: {
    includeFontPadding: false,
    fontFamily: 'sans-serif-thin',
    fontWeight: 'normal',
  },
  light: {
    includeFontPadding: false,
    fontFamily: 'sans-serif-light',
    fontWeight: 'normal',
  },
  regular: {
    includeFontPadding: false,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
  },
  medium: {
    includeFontPadding: false,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
  },
  bold: {
    includeFontPadding: false,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  condensed: {
    includeFontPadding: false,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'normal',
  },
  condensedBold: {
    includeFontPadding: false,
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',
  },
};

const sanFranciscoWeights: any = {
  thin: {
    fontFamily: 'System',
    fontWeight: '100',
  },
  ultraLight: {
    fontFamily: 'System',
    fontWeight: '200',
  },
  light: {
    fontFamily: 'System',
    fontWeight: '300',
  },
  regular: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'System',
    fontWeight: '500',
  },
  semibold: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  bold: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  heavy: {
    fontFamily: 'System',
    fontWeight: '800',
  },
  black: {
    fontFamily: 'System',
    fontWeight: '900',
  },
};

const fonts = {
  thin: Platform.OS === 'ios' ? sanFranciscoWeights.thin : robotoWeights.thin,
  regular:
    Platform.OS === 'ios' ? sanFranciscoWeights.regular : robotoWeights.regular,
  medium:
    Platform.OS === 'ios' ? sanFranciscoWeights.medium : robotoWeights.medium,
  bold: Platform.OS === 'ios' ? sanFranciscoWeights.bold : robotoWeights.bold,
};

export default fonts;
