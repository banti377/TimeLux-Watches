import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import MenContent from './MenContent';
import HeaderCom from '../../components/HeaderCom';
import FooterCom from '../../components/FooterCom';
import SliderCom from '../../components/SliderCom';

const Men = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />

      <SliderCom />
      <MenContent searchText={searchText} />

      <FooterCom />
    </Layout>
  );
};
export default Men;