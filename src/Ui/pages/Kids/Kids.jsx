import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import KidsContent from './KidsContent';
import HeaderCom from '../../components/HeaderCom';
import FooterCom from '../../components/FooterCom';
import SliderCom from '../../components/SliderCom';

const Kids = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />

      <SliderCom />
      <KidsContent searchText={searchText} />

      <FooterCom />
    </Layout>
  );
};
export default Kids;