import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { mainStore } from '../store/main-store.ts'

export const MainStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={mainStore}>{children}</Provider>
}
