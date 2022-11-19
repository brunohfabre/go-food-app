import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { HookProvider } from './hooks'
import { AppRoutes } from './routes/AppRoutes'
import { colors } from './styles/colors'

const client = new QueryClient()

export function Root() {
  return (
    <QueryClientProvider client={client}>
      <HookProvider>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: colors.gray2,
            },
          }}
        >
          <AppRoutes />
        </NavigationContainer>
      </HookProvider>
    </QueryClientProvider>
  )
}
