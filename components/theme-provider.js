'use client';
import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const CustomThemeProvider = ({
  children,
  attribute,
  defaultTheme,
  enableSystem,
  disableTransitionOnChange,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = enableSystem
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : defaultTheme;
    setTheme(initialTheme);
    root.setAttribute(attribute, initialTheme);
  }, [attribute, defaultTheme, enableSystem]);

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
      <div>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        {children}
      </div>
    </NextThemesProvider>
  );
};