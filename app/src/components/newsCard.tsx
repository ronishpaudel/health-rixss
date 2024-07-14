import React from "react";

interface INewsCard {
  id?: string;
  onClick: () => void;
  image: string;
  alt: string;
  title: string;
  description: string;
}
const NewsCard = ({ onClick, image, description, title, alt }: INewsCard) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl max-w-[390px] w-full">
      <div className="block h-48 w-full overflow-hidden" onClick={onClick}>
        <img
          src={image}
          alt={alt}
          width={400}
          height={400}
          className="h-full w-full cursor-pointer object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
          <div onClick={onClick} className="cursor-pointer">
            {title}
          </div>
        </h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export { NewsCard };
