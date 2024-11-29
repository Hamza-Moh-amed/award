import React from "react";
import Button from "./Button";
import { TiLocationArrowOutline } from "react-icons/ti";

//Type '{ src: string; title: Element; description: string; isCommingSoon: boolean; }
const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
}: {
  src: string;
  title: React.ReactNode;
  description?: string;
  isComingSoon?: boolean;
}) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
        {isComingSoon && (
          <Button
            id="product-button"
            title="Comming Soon"
            leftIcon={<TiLocationArrowOutline />}
            containerClass="!bg-black !text-blue-50 md:flex hidden items-center justify-center gap-1"
          />
        )}
      </div>
    </div>
  );
};

export default BentoCard;
