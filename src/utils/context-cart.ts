import { createContext } from 'react'
import { ContextCartCountType } from '../types'

export const ContextCartCount = createContext<ContextCartCountType>({
  contextCartCount: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setContextCartCount: () => {},
})
