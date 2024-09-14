'use client'

import { ErrorComponent } from 'next/dist/client/components/error-boundary'
import React from 'react'
import { Button } from '@/components/ui/button';

const Error: ErrorComponent = ({ error, reset }) => {
  const isDev = process.env.NODE_ENV === 'development';
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-[calc(100vh-8rem)]">
      <p className="text-dark-400/50 text-lg font-medium">{isDev ? error.message : 'Something went wrong'}</p>
      <Button
        onClick={() => reset()}
        className="bg-purple-400 text-white px-4 py-2 rounded-md"
      >
        Try again
      </Button>
    </div>
  )
}

export default Error