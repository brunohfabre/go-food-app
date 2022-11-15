import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './routes/AppRoutes'

export function Root() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
