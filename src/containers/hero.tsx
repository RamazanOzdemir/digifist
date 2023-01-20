import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <section className="c-hero">
      <h1 className="c-hero__heading">
        Everyday tops, we have something to suit every occasion.
      </h1>
      <p className="c-hero__caption">
        At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
        tincidunt semper eu proin leo gravida cursus.
      </p>
      <a className="c-hero__link" href="#">
        Shop all everyday items
      </a>
    </section>
  );
};
