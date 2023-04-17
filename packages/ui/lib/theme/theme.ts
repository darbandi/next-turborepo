import { createTheme, responsiveFontSizes } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface ComponentsProps {
    MuiTextField?: {
      labelProps?: {
        dir?: 'ltr' | 'rtl'
      }
    }
  }
}

const common = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4,
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0.0075em',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.01071em',
    },
  },
}

export const lightTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#999999',
      },
    },
    ...common,
    // components: {
    //   MuiTextField: {
    //     styleOverrides: {
    //       root: {
    //         '& label.Mui-focused': {
    //           color: 'green',
    //         },
    //         '& .MuiInputBase-input': {},
    //         '& .MuiInputBase-root': {},
    //         '& .MuiInputLabel-root': {},
    //       },
    //     },
    //   },
    // },
  }),
)

export const darkTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#000',
      },
      secondary: {
        main: '#333333',
      },
    },
    ...common,
    // components: {
    //   MuiTextField: {
    //     styleOverrides: {
    //       root: {
    //         '& label.Mui-focused': {
    //           color: 'green',
    //           textAlign: 'right',
    //         },
    //         '& .MuiInputBase-input': {
    //           textAlign: 'right',
    //         },
    //         '& .MuiInputBase-root': {
    //           textAlign: 'right',
    //         },
    //         '& .MuiInputLabel-root': {
    //           textAlign: 'right',
    //         },
    //       },
    //     },
    //   },
    // },
  }),
)
