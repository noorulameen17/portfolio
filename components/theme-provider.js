'use client';
import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const CustomThemeProvider = ({
  children,
  attribute,
  defaultTheme = 'light', // Set default theme to light
  enableSystem = false, // Disable system theme detection
  disableTransitionOnChange,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = defaultTheme;
    setTheme(initialTheme);
    root.setAttribute(attribute, initialTheme);
  }, [attribute, defaultTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute(attribute, newTheme);
  };

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      <div className={theme}>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        {children}
      </div>
    </NextThemesProvider>
  );
};