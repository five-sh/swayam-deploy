import React from "react";
import "./../../style/home/start.css";
export default function Start() {
  return (
    <>
      <div className="landingPage">
        <div className="landingPageText">
          <h1>Swayam</h1>
          <p>Ecell - VCE</p>
          <p>Incubating Innovation</p>
        </div>
        {/* <div className='homePageSVG'>
			<img src={HomePageVector}></img>
		</div> */}
      </div>
      <div className="aboutContainer">
        <div class="about">
          <h3>About us</h3>
        </div>
        <div class="aboutContent">
          <img src="download.png" alt="" />
          <div class="about_text">
            <p>
              Since our inception in 2012, we have always been truthful to our
              roots. We are a team of enthusiastic and passionate individuals
              who aspire to be entrepreneurs. We strongly believe that
              innovation comes from creating an environment where ideas can
              connect. We strive to unleash our dormant innovative potential
              through constant collaboration, nourishment of entrepreneurial
              ideals and the quest to find new opportunities.
            </p>
          </div>
        </div>

        <div class="about">
          {/* <img className="svgs" src={Svg}></img> */}
          <h3>What We Do</h3>
        </div>
        <div class="aboutContent">
          <img src="download.png" alt="" />
          <div class="about_text">
            <p>
              Swayam, the ED-Cell of Vasavi College of Engineering, organizes a
              myriad of events in our campus throughout the year to inculcate
              the entrepreneurial spirit in our fellow students. Some of the
              events include E-Talks, competitions, fun-filled carnivals, and
              Workshops. Our annual flagship event, the Ideation Contest
              provides the contestants an opportunity to take their business
              ideas further at our Incubation Cell.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
