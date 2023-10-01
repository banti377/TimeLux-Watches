import React, { useState } from "react";
import { Layout, theme } from "antd";
import HomeContent from "./HomeContent";
import FooterCom from "../../components/FooterCom";
import SliderCom from "../../components/SliderCom";
import HeaderCom from "../../components/Header/HeaderCom";

const Home = () => {
  return (
    <Layout className="layout">
      <HeaderCom />
      <SliderCom />
      <HomeContent />

      <FooterCom />
    </Layout>
  );
};
export default Home;
