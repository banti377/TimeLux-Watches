import React from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { Button } from "reactstrap";

export default function ProductCom() {
  return (
    <>
      <div className="m-3">
        <div className="border-bottom">
          <Button color="danger">Add Product</Button>
        </div>
        <ProductForm />
        <ProductTable />
      </div>
    </>
  );
}
