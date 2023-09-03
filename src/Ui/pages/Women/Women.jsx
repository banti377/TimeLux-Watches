import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import WomenContent from './WomenContent';
import HeaderCom from '../../components/HeaderCom';
import FooterCom from '../../components/FooterCom';
import SliderCom from '../../components/SliderCom';

const Women = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <Layout className="layout">
      <HeaderCom setSearchText={setSearchText} />

      {/* <SliderCom /> */}
      <WomenContent searchText={searchText} />

      <FooterCom />
    </Layout>
  );
};
export default Women;