import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import HomeContent from "./HomeContent";
import SliderCom from "../../components/SliderCom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../redux/fetures/product/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <Layout className="layout">
      <SliderCom />
      <HomeContent />
    </Layout>
  );
};
export default Home;
