import React from "react";

// import Slider from "react-slick";
import Card from "../about-us/card";
import style from "../about-us/styles/card-parent.module.scss";
const CardParent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <main>
      <div className={style.container}>
        <div className={style.containerDiv} >
          {/* <Slider {...settings}> */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          {/* </Slider> */}
        </div>

        <div className={style.nextDiv}>
          <button>Prev</button>
        </div>
        <div div className={style.prevDiv}>
          <button>Next</button>
        </div>
      </div>
    </main>
  );
};

export default CardParent;
