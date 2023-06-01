import React from "react";
import Slider from "react-slick";

const CEOCarousel = () => {
  const ceos = [
    { id: 1, name: "John Doe", image: process.env.PUBLIC_URL + "/favicon.png" },
    { id: 2, name: "Jane Smith", image: "/path/to/image2.jpg" },
    // Add more CEOs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {ceos.map((ceo) => (
        <div key={ceo.id}>
          <h3>{ceo.name}</h3>
          <img src={ceo.image} alt={ceo.name} />
        </div>
      ))}
    </Slider>
  );
};

export default CEOCarousel;
