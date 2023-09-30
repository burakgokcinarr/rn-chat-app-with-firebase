import { useFonts } from 'expo-font';
import NavigationRouter from './src/navigation/NavigationRouter';
import { FontLoader } from './src/config/fontLoader';
// Init i18n
import i18n from './src/localization/i18n';

export default function App() {

  const [fontsLoaded] = useFonts(FontLoader);

  if (!fontsLoaded) {
    return null;
  } 

  return (
    <NavigationRouter/>
  );
}
