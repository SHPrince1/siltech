import React from "react";
import WhatPeopeSayCard from "../about-us/what-peope-say-card";
import style from "../../components/about-us/styles/what-people-say-parent-card.module.scss";
const WhatPeopleSayParentCard = () => {
  return (
    <main>
      <div className={style.container}>
        {" "}
        <div className={style.title}>
          <h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
          <p>
            Our passion for technology and innovation drives us to deliver
            exceptional results for our clients.
          </p>
        </div>
        <div className={style.containerContent}>
          <WhatPeopeSayCard />
          <WhatPeopeSayCard />
          <WhatPeopeSayCard />
          <WhatPeopeSayCard />
          <WhatPeopeSayCard />
        </div>
      </div>
    </main>
  );
};

export default WhatPeopleSayParentCard;
