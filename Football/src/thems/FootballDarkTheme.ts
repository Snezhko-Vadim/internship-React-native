import { DarkTheme } from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

const FootballDarkTheme = {
  ...PaperDarkTheme,
  ...DarkTheme,
  colors: { ...PaperDarkTheme.colors, ...DarkTheme.colors },
};

export { FootballDarkTheme };
