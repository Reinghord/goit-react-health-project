import { useEffect, useState } from 'react';
import { ThemeContainer, Checkbox, Ball } from './ThemeSwitching.styled.js';
import { light, dark } from './Theme.styled';
import { ThemeProvider } from 'styled-components';

export const ThemeSwitching = ({ children }) => {
  useEffect(() => {
    const currentChecked = JSON.parse(localStorage.getItem('current-checked'));
    const currentTheme = JSON.parse(localStorage.getItem('current-theme'));
    if (currentTheme || currentChecked) {
      setChecked(currentChecked);
      setSelectedTheme(currentTheme);
      return;
    }
  }, []);

  const [selectedTheme, setSelectedTheme] = useState(light);
  const [checked, setChecked] = useState(false);

  const HandleThemeChange = theme => {
    if (theme === dark) {
      setChecked(true);
      setSelectedTheme(light);
      localStorage.setItem('current-theme', JSON.stringify(light));
      localStorage.setItem('current-checked', JSON.stringify(true));
    } else {
      setChecked(false);
      setSelectedTheme(dark);
      localStorage.setItem('current-checked', JSON.stringify(false));
      localStorage.setItem('current-theme', JSON.stringify(dark));
    }
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeContainer>
        <Checkbox
          type="checkbox"
          value={checked}
          onChange={() => {
            HandleThemeChange(selectedTheme);
          }}
        />
        <Ball></Ball>
      </ThemeContainer>
      {children}
    </ThemeProvider>
  );
};
