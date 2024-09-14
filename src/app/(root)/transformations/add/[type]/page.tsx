import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { Metadata } from 'next'
import React from 'react'

type AddTransformationProps = {
  params: {
    id: string
    type: string
  }
}

const AddTransformation = async ({ params }: AddTransformationProps) => {
  const transformation = transformationTypes[params.type as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Add"
          type={transformation.type as TransformationTypeKey}
        />
      </section>
    </>
  );
}

export const generateMetadata = ({ params }: AddTransformationProps): Metadata => {
  const transformation = transformationTypes[params.type as TransformationTypeKey];

  return {
    title: `${transformation.title}`,
    description: `Add ${transformation.title} to your image`,
    openGraph: {
      title: `${transformation.title}`,
      description: `Add ${transformation.title} to your image`,
    },
  }
}

export default AddTransformation