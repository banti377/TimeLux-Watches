import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import HomeContent from './HomeContent';
import HeaderCom from '../../components/HeaderCom';
import FooterCom from '../../components/FooterCom';
import SliderCom from '../../components/SliderCom';

const Home = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />

      {/* <SliderCom /> */}
      <HomeContent searchText={searchText} />

      <FooterCom />
    </Layout>
  );
};
export default Home;