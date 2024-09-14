import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getImageById } from "@/lib/actions/image.actions";
import { Metadata } from "next";
import { generateStaticParams } from "../page";

const UpdateTransformation = async ({ params: { id } }: SearchParamProps) => {
  const image = await getImageById(id);

  const transformation =
    transformationTypes[image.transformationType as TransformationTypeKey];

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />

      <section className="mt-10">
        <TransformationForm
          action="Update"
          type={image.transformationType as TransformationTypeKey}
          config={image.config}
          data={image}
        />
      </section>
    </>
  );
};

export { generateStaticParams }

export const generateMetadata = async ({ params }: SearchParamProps): Promise<Metadata> => {
  const image = await getImageById(params.id);

  return {
    title: `${image.title} - Update`,
    description: "Update the details of the image",
    openGraph: {
      title: `${image.title} - Update`,
      description: "Update the details of the image",
      images: [{
        url: image.secureURL,
      }],
    },
  }
}

export default UpdateTransformation;
