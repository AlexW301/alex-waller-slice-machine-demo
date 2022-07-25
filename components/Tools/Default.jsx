import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { Image } from "../Image";

export const DefaultTools = ({ id, title, description, items }) => {

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
            <PrismicRichText field={title} />
          </div>

          <div className="mb-6 text-xl text-gray-800">
            <PrismicRichText field={description} />
          </div>

          <div className="mx-auto flex flex-wrap gap-6 justify-center">
            {items?.map((item) => (
              <Image key={item.image.url} {...item.image} height={200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
