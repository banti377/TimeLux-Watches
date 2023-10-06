import React, { useState } from "react";
import { Layout, theme } from "antd";
import HomeContent from "./HomeContent";
import SliderCom from "../../components/SliderCom";

const Home = () => {
  return (
    <Layout className="layout">
      <SliderCom />
      <HomeContent />
    </Layout>
  );
};
export default Home;
