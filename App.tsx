import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/Screens/Dasboard';
import { Resgister } from './src/Screens/Register';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return (
       <AppLoading />
    )
  }

  return(
    <ThemeProvider theme={theme}>
      <Resgister />
    </ThemeProvider>
  )
}
