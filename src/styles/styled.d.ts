import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrastText: string;
      };
      grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      background: {
        default: string;
        paper: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      error: {
        main: string;
        light: string;
        dark: string;
      };
      warning: {
        main: string;
        light: string;
        dark: string;
      };
      success: {
        main: string;
        light: string;
        dark: string;
      };
    };
    spacing: (multiplier: number) => string;
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      round: string;
    };
    typography: {
      fontFamily: string;
      h1: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h5: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      h6: {
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
      };
      body1: {
        fontSize: string;
        lineHeight: number;
      };
      body2: {
        fontSize: string;
        lineHeight: number;
      };
      button: {
        fontSize: string;
        fontWeight: number;
        textTransform: string;
      };
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
