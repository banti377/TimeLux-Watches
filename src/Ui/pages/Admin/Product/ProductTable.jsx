import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";

export default function ProductTable() {
  let [productData, setProductData] = useState([]);

  const allData = useSelector((state) => {
    return state?.productReducer?.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setProductData(allData);
  }, [allData]);

  const deleteHandler = (id) => {};

  const updateHandler = (data, index) => {
    toggle();
  };

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
              {productData?.map?.((e, i) => {
                return (
                  <tr key={e?._id}>
                    <th scope="row">{i + 1}</th>
                    <td style={{ maxWidth: "10vw" }} className="text-truncate">
                      {e?.title}
                    </td>
                    <td style={{ maxWidth: "20vw" }} className="text-truncate">
                      {e?.description}
                    </td>
                    <td>{e?.price}</td>
                    <td>
                      <img
                        style={{ maxHeight: "100px", maxWidth: "100px" }}
                        src="{e?.thumbnail}"
                        alt=""
                      />
                    </td>
                    <td>
                      <Pencil
                        className="me-4"
                        type="button"
                        color="#918888"
                        onClick={() => updateHandler(e, i)}
                      />
                      <Trash2
                        onClick={() => deleteHandler(e?._id)}
                        type="button"
                        color="#918888"
                      />
                    </td>
                  </tr>
                );
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
