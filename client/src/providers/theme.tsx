import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
