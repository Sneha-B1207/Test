import { DashboardProvider } from '@/context/DashboardContext';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <DashboardProvider>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </DashboardProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}