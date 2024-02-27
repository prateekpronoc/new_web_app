import React from "react";
import HomepageHeader from "./sections/homepage-header";
import HomeOffer from "./sections/home-offer";
import HowToBook from "./sections/how-to-book";
import WhyWow from "./sections/why-wow";
import Reviews from "./sections/reviews";
import Faqs from "./sections/faqs";
import Download from "./sections/download";
import Footer from "./sections/footer";

const Homepage = () => {
  return (
    <div>
      <HomepageHeader />
      <HomeOffer />
      <HowToBook />
      <WhyWow />
      <Reviews />
      <Faqs />
      <Download />
      <Footer />
    </div>
  );
};

export default Homepage;
