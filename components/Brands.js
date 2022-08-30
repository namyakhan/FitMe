import React from "react";

const Brands = () => {
  let Images = [
    { id: "1", url: "images/adidas.png", title: "adidas-logo" },
    { id: "2", url: "images/amazon.png", title: "amazon-logo" },
    { id: "3", url: "images/nike.png", title: "nike-logo" },
    { id: "4", url: "images/jordan.png", title: "jordan-logo" },
    { id: "5", url: "images/google.png", title: "google-logo" },
    { id: "6", url: "images/apple.png", title: "apple-logo" },
  ];
  return (
    <div className="bg-beige font-sora container mx-auto">
      <h1 className="text-[18px] font-[600] text-gray text-center mb-6 lg:mb-10 pt-10">
        Trusted by 3000+ brands worldwide
      </h1>
      <div className="grid grid-rows-2 grid-flow-col gap-5 justify-evenly  lg:flex lg:flex-cols-6 lg:justify-center lg:space-x-20">
        {Images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={image.title}
            loading="lazy"
            className="h-12 lg:h-20 "
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
