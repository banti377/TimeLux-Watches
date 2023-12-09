import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import { Button } from "reactstrap";
import ProductTable from "./ProductTable";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../../../redux/fetures/product/productSlice";

export default function ProductCom() {
  const [modal, setModal] = useState(false);
  let [productData, setProductData] = useState();
  let [index, setIndex] = useState(null);

  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <>
      <div className="m-3">
        <div className="border-bottom d-flex justify-content-end">
          <Button className="mb-3" color="danger" onClick={() => toggle()}>
            Add Product
          </Button>
        </div>
        <ProductForm
          index={index}
          updatedData={productData}
          setDefaultData={setProductData}
          modal={modal}
          toggle={toggle}
          setIndex={setIndex}
        />
        <ProductTable
          setIndex={setIndex}
          setDefaultData={setProductData}
          toggle={toggle}
        />
      </div>
    </>
  );
}
