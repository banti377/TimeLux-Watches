import React from "react";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../../../redux/fetures/product/productSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  dispatch(fetchProductData());
  return <div>Dashboard</div>;
}
