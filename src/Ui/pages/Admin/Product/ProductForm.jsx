import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  FormGroup,
  Col,
  Label,
  Input,
} from "reactstrap";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import {
  addProduct,
  updateProduct,
} from "../../../../redux/fetures/product/productSlice";
import { useDispatch } from "react-redux";

export default ({ modal, toggle, updatedData, index, setIndex }) => {
  let [productData, setProductData] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    thumbnail: "",
    gender: "",
    discountPercentage: "",
    availableStock: "",
  });
  useEffect(() => {
    setProductData(updatedData);
  }, [updatedData]);

  const dispatch = useDispatch();
  const submitHandler = () => {
    toggle();
    axios
      .post(`${BE_URL}/product/create`, productData, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        console.log("------>", resData);
        dispatch(addProduct(resData.data));
        toast.success("Product added...! ");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const updateHandler = () => {
    toggle();
    axios
      .put(`${BE_URL}/product/update/${updatedData?._id}`, productData, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        dispatch(updateProduct({ index, data: resData?.data?.data }));
        setProductData({
          title: "",
          description: "",
          brand: "",
          price: "",
          thumbnail: "",
          gender: "",
          discountPercentage: "",
          availableStock: "",
        });
        setIndex(null);
        toast.success("Product updated...! ");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Product Form</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="title">Name</Label>
                  <Input
                    id="title"
                    value={productData?.title}
                    placeholder="Enter product name"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        title: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    id="description"
                    value={productData?.description}
                    placeholder="Enter product description"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        description: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="brand">Brand</Label>
                  <Input
                    id="brand"
                    value={productData?.brand}
                    placeholder="Enter brand name"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        brand: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Gender</Label>
                  <Row>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
                        checked={productData?.gender === "male"}
                        onChange={() =>
                          setProductData({ ...productData, gender: "male" })
                        }
                      />
                      <Label for="gender">Male</Label>
                    </Col>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
                        checked={productData?.gender === "female"}
                        onChange={() =>
                          setProductData({ ...productData, gender: "female" })
                        }
                      />
                      <Label for="gender">Female</Label>
                    </Col>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
                        checked={productData?.gender === "kids"}
                        onChange={() =>
                          setProductData({ ...productData, gender: "kids" })
                        }
                      />
                      <Label for="gender">Kids</Label>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="thumbnail">Image</Label>
                  <Input
                    id="thumbnail"
                    placeholder="Enter product name"
                    type="url"
                    value={productData?.thumbnail}
                    onChange={(e) =>
                      setProductData({
                        ...prouductData,
                        thumbnail: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="discountPercentage">Discount</Label>
                  <Input
                    id="discountPercentage"
                    placeholder="Enter product description"
                    type="number"
                    value={productData?.discountPercentage}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        discountPercentage: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="availableStock">Available Stock</Label>
                  <Input
                    id="availableStock"
                    placeholder="Enter product name"
                    type="number"
                    value={productData?.availableStock}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        availableStock: e?.target?.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="price">Price</Label>
                  <Input
                    id="price"
                    placeholder="Enter product price"
                    type="number"
                    value={productData?.price}
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        price: e?.target?.value,
                      });
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            {index || index === 0 ? (
              <Button className="w-100" onClick={updateHandler}>
                Update
              </Button>
            ) : (
              <Button className="w-100" onClick={submitHandler}>
                Add Product
              </Button>
            )}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
