import { RouteComponentProps } from 'react-router-dom';
export interface IColorSchemeSwitcherProps extends RouteComponentProps {
  isEnabledDarkTheme: boolean;
  colorSchemeSwitch: () => void;
}
