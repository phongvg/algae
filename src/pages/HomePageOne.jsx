import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import RecommendedOne from "../components/RecommendedOne";
import HotDealsOne from "../components/HotDealsOne";
import BestSellsOne from "../components/BestSellsOne";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
const HomePageOne = () => {
  return (
    <>
      <Preloader />

      <ScrollToTop smooth color='#299E60' />

      <ColorInit color={false} />

      <HeaderOne />

      <BannerOne />

      <RecommendedOne />

      <HotDealsOne />

      <BestSellsOne />

      <ShippingOne />

      <NewsletterOne />

      <FooterOne />
    </>
  );
};

export default HomePageOne;
