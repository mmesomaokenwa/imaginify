import React from 'react'

type UpdateTransformationProps = {
  params: {
    id: string
  }
}

const UpdateTransformation = ({ params }: UpdateTransformationProps) => {
  return (
    <div>UpdateTransformation {params.id}</div>
  )
}

export default UpdateTransformation