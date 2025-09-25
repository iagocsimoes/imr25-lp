'use client'

import { createContext, useContext, ReactNode } from 'react'

interface TicketModalContextType {
  openModal: () => void
}

const TicketModalContext = createContext<TicketModalContextType | undefined>(undefined)

export const useTicketModalContext = () => {
  const context = useContext(TicketModalContext)
  if (!context) {
    throw new Error('useTicketModalContext must be used within a TicketModalProvider')
  }
  return context
}

interface TicketModalProviderProps {
  children: ReactNode
  openModal: () => void
}

export const TicketModalProvider = ({ children, openModal }: TicketModalProviderProps) => {
  return (
    <TicketModalContext.Provider value={{ openModal }}>
      {children}
    </TicketModalContext.Provider>
  )
}