import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../../redux/fetures/product/productSlice";
import CardCom from "../../components/Card/CardCom";

export default function Men() {
  let [Data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  const data = useSelector((state) => state?.productReducer?.products);
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <>
      <div
        style={{ backgroundColor: "#f5f5dc" }}
        className="d-flex flex-wrap justify-content-around"
      >
        {Data?.map?.((e, i) => {
          return (
            <CardCom
              key={i + Math.random()}
              data={e}
              onclick={() => navigate(`productpage/${e?._id}`)}
            />
          );
        })}
      </div>
    </>
  );
}
