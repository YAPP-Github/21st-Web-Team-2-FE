import { NextSeo } from 'next-seo';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  image?: string;
}
const SEO: FC<Props> = ({ title, description, image }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: 'website',
        images: [{ url: image || '/og.png' }],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default SEO;
