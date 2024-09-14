import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-[calc(100vh-8rem)]">
      <Image
        src="/assets/icons/spinner.svg"
        alt="spinner"
        width={50}
        height={50}
        className="invert brightness-150"
      />
      <p className="text-dark-500">Please wait...</p>
    </div>
  )
}

export default Loading