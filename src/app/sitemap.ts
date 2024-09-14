import { getAllImages } from "@/lib/actions/image.actions";
import { IImage } from "@/lib/database/models/image.model";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

  const images = await getAllImages({ limit: null, page: null });

  const imageUrls: MetadataRoute.Sitemap = images?.data.map((image: IImage) => ({
    url: `${baseUrl}/transformations/${image._id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const imageUrlsUpdate: MetadataRoute.Sitemap = images?.data.map((image: IImage) => ({
    url: `${baseUrl}/transformations/${image._id}/update`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const addTypes: TransformationTypeKey[] = ['fill', 'recolor', 'remove', 'removeBackground', 'restore']

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/credits`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...addTypes.map((type) => ({
      url: `${baseUrl}/add/${type}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })) as MetadataRoute.Sitemap,
  ]

  return [
    ...staticUrls,
    ...imageUrls,
    ...imageUrlsUpdate,
  ]
}

export default sitemap;

