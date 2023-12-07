import axios from "axios";
import React, { useState } from "react";
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
import { theme } from "antd";
import { toast } from "react-toastify";
import { addProduct } from "../../../../redux/fetures/product/productSlice";
import { useDispatch } from "react-redux";

export default ({ modal, toggle }) => {
  let [productData, setProductData] = useState({
    title: "",
    description: "",
    brand: "",
    price: "",
    thumbnail: "",
    gender: "",
    category: [],
    discountPercentage: "",
    availableStock: "",
  });

  const dispatch = useDispatch();
  const submitHandler = () => {
    console.log("---productData---", productData);
    axios
      .post(`${BE_URL}/product/create`, productData, {
        headers: {
          "Content-Type": "application/json",
          authorization: ` Bearer ${JSON.parse(localStorage.getItem("token"))}`,
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
                    placeholder="Enter product name"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        title: "e?.target?.value",
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
                    placeholder="Enter product description"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        description: "e?.target?.value",
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
                    placeholder="Enter brand name"
                    type="text"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        brand: "e?.target?.value",
                      })
                    }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Gender</Label>
                  <Row>
                    <Col>
                      <Input
                        id="gender"
                        className="me-2"
                        type="radio"
                        name="test"
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
                    placeholder="Enter product thumbnail"
                    type="url"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        thumbnail: "e?.target?.value",
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
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        discountPercentage: "e?.target?.value",
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
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        availableStock: "e?.target?.value",
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
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        price: "e?.target?.value",
                      });
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button className="w-100" onClick={submitHandler}>
              Add Product
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
