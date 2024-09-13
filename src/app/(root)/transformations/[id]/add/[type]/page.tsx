import React from 'react'

type AddTransformationProps = {
  params: {
    id: string
    type: string
  }
}

const AddTransformation = ({ params }: AddTransformationProps) => {
  return (
    <div>AddTransformation {params.type}</div>
  )
}

export default AddTransformation