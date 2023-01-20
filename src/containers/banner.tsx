import { Image } from '@/components';
import { FC } from 'react';
import bannerImage from '@/assets/images/banner.png';

export const Banner: FC = () => {
  return (
    <section className="c-banner">
      <Image className="c-banner__image" src={bannerImage} alt="banner image" />
    </section>
  );
};
