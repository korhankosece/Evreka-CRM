import { DefaultTheme } from 'styled-components';

const colors = {
  primary: {
    main: '#0B2B51', // Evreka blue
    light: '#1A3A60', // Lighter shade of blue
    dark: '#081D38', // Darker shade of blue
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#3BA935', // Evreka green
    light: '#4FBE49', // Lighter shade of green
    dark: '#2A8725', // Darker shade of green
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F5F5F5',
  },
  text: {
    primary: '#0B2B51',
    secondary: '#757575',
    disabled: '#9E9E9E',
  },
  error: {
    main: '#D32F2F',
    light: '#EF5350',
    dark: '#C62828',
  },
  warning: {
    main: '#ED6C02',
    light: '#FF9800',
    dark: '#E65100',
  },
  success: {
    main: '#3BA935',
    light: '#4FBE49',
    dark: '#2A8725',
  },
};

const spacing = (multiplier: number) => `${multiplier * 8}px`;

export const theme: DefaultTheme = {
  colors,
  spacing,
  borderRadius: {
    small: '4px',
    medium: '8px',
  },
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
  },
} as const;
