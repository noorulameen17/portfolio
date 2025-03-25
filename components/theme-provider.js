'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const CustomThemeProvider = ({
  children,
  attribute,
  defaultTheme = 'light',
  enableSystem = false,
  disableTransitionOnChange,
}) => {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      <div>
        {children}
      </div>
    </NextThemesProvider>
  );
};