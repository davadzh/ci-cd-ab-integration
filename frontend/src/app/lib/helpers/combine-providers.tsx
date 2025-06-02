import { ComponentType, ReactNode } from 'react'

export interface ProviderProps {
  children: ReactNode
}
type ProviderComponent = ComponentType<ProviderProps>

export const combineProviders = (
  providers: ProviderComponent[],
  children: ReactNode,
): ReactNode => {
  return providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>
  }, children)
}
