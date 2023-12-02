import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import { Button } from "reactstrap";
import ProductTable from "./ProductTable";
import { useDispatch } from "react-redux";
import { fetchProductData } from "../../../../redux/fetures/product/productSlice";

export default function ProductCom() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <>
      <div className="m-3">
        <div className="border-bottom">
          <Button color="danger" onClick={() => toggle()}>
            Add Product
          </Button>
        </div>
        <ProductForm modal={modal} toggle={toggle} />
        <ProductTable />
      </div>
    </>
  );
}
