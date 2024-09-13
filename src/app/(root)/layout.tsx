import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

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
    </div>
  )
}

export default RootLayout