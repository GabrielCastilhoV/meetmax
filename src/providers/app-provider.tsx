import { ThemeProvider } from 'next-themes'

import { darkTheme } from 'styles/stitches.config'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  )
}
