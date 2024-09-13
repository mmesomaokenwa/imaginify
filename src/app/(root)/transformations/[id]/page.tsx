import React from 'react'

type TransformationProps = {
  params: {
    id: string
  }
}

const Transformation = ({ params }: TransformationProps) => {
  return (
    <div>Transformation {params.id}</div>
  )
}

export default Transformation