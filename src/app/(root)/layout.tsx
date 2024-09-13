import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'
import { Toaster } from '@/components/ui/toaster'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='root'>
      <Sidebar />
      <MobileNav />
      <div className='root-container'>
        <main className='wrapper'>
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  )
}

export default RootLayout