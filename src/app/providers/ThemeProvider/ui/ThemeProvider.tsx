import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultThemeProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
    <div>
      <ThemeContext.Provider value={defaultThemeProps}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
