import React from "react";
import Slider from "react-slick";
import "../styles/Featured.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const mockData = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      image: "corolla.jpg",
      price: "$20,000",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      image: "civic.jpg",
      price: "$22,000",
    },
    {
      id: 3,
      make: "Ford",
      model: "F-150",
      image: "f150.jpg",
      price: "$35,000",
    },
  ];

  return (
    <div id="featured" className="featured-wrapper">
      <h3 className="featured-title">Featured</h3>
      <Slider {...settings}>
        {mockData.map((car) => (
          <div className="featured-car" key={car.id}>
            <div className="info-wrapper">
              <h3>
                {car.make} {car.model}
              </h3>
              <p>Price: {car.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Featured;
