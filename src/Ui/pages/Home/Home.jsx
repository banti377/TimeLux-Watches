import React from 'react';
import { Layout, theme } from 'antd';
import HomeContent from './HomeContent';
import HeaderCom from '../../components/HeaderCom';
import FooterCom from '../../components/FooterCom';
import CarouselCom from '../../components/CarouselCom';


const Home = () => {
  return (
    <Layout className="layout">

      <HeaderCom />
      <CarouselCom />
      <HomeContent />

      <FooterCom />
    </Layout>
  );
};
export default Home;