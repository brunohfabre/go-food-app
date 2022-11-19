import { ReactNode } from 'react'

import { LoadingProvider } from './useLoading'

type HookProviderProps = {
  children: ReactNode
}

export function HookProvider({ children }: HookProviderProps) {
  return <LoadingProvider>{children}</LoadingProvider>
}
