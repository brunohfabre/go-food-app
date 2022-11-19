import { createContext, ReactNode, useContext, useState } from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'

type LoadingContextData = {
  setLoading: (value: boolean) => void
}

const LoadingContext = createContext({} as LoadingContextData)

type LoadingProviderProps = {
  children: ReactNode
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [state, setState] = useState(false)

  function setLoading(value: boolean) {
    setState(value)
  }

  return (
    <>
      {state && (
        <View style={styles.container}>
          <Text style={styles.title}>Carregando...</Text>
        </View>
      )}

      <LoadingContext.Provider value={{ setLoading }}>
        {children}
      </LoadingContext.Provider>
    </>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)

  return context
}
