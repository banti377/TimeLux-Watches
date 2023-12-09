import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import { fetchProductData } from "../../../../redux/fetures/product/productSlice";

export default function ProductTable({ toggle, setDefaultData, setIndex }) {
  let [productData, setProductData] = useState([]);

  const allData = useSelector((state) => {
    return state?.productReducer?.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    setProductData(allData);
  }, [allData]);

  const deleteHandler = (id) => {
    axios
      .delete(`${BE_URL}/product/delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        toast.success("Product deleted...!");
        dispatch(fetchProductData());
      })
      .catch((err) => toast.error(err.message));
  };

  const updateHandler = (data, index) => {
    toggle();
    setDefaultData(data);
    setIndex(index);
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
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                        src={e?.thumbnail}
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
