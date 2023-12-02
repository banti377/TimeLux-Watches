import { Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

export default function ProductTable() {
  let [productData, setProductData] = useState([]);

  const allData = useSelector((state) => {
    return state?.productReducer?.products;
  });

  useEffect(() => {
    setProductData(allData);
  }, []);

  return (
    <>
      <div className="d-flex flex-colum justify-content-center align-items-center">
        {productData?.length > 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Descripton</th>
                <th>Price</th>
                <th>IMG</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData?.map?.((e) => {
                <tr>
                  <th key={e?.id} scope="row">
                    {i + 1}
                  </th>
                  <td>{e?.title}</td>
                  <td>{e?.description}</td>
                  <td>{e?.price}</td>
                  <td>
                    <img
                      style={{ maxHeight: "100px", maxWidth: "100px" }}
                      src="{e?.thumbnail}"
                      alt=""
                    />
                  </td>
                  <td>
                    <Pencil color="#918888" />
                    <Trash2 color="#918888" />
                  </td>
                </tr>;
              })}
            </tbody>
          </Table>
        ) : (
          <h3 style={{ color: "#918e86" }}>Data Not Found...</h3>
        )}
      </div>
    </>
  );
}
