import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots =>  {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

export default robots;