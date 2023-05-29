import { ThemeOptions } from '@material-ui/core/styles/createTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#37af98',
      light: 'rgb(95, 191, 172)',
      dark: 'rgb(38, 122, 106)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#f50057',
      light: 'rgb(247, 51, 120)',
      dark: 'rgb(171, 0, 60)',
      contrastText: '#fff',
    },
    text: {
      disabled: '#4bd6a0',
      secondary: 'rgba(255,255,255,0.78)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
};