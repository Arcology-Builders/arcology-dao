import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';

// https://mui.com/customization/default-theme/
export const theme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '#7474c4',
         dark: '#4145AE',
      },
      secondary: {
         main: '#bb9e79',
         dark: '#AE8341',
      },
      error: {
         main: '#BC3F3F',
      },
   }
})