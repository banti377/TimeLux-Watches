import { Search, User2 } from "lucide-react";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  Button,
} from "reactstrap";
import "./index.css";
import { useSelector } from "react-redux";
import jsonData from "../../../utils/watch.json";
import CardCom from "../Card/CardCom"
import Slider from "../Slider/SliderCom"

function HeaderCom(props) {
  const userData = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState(jsonData);


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      // If search query is empty, show all products
      setFilteredProducts([]);
    } else {
      // Filter products based on search query
      const filtered = jsonData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };


  return (
    <div>
      <Navbar expand={"lg"} style={{ backgroundColor: "#BAB86C" }}>
        <NavbarBrand href="/" style={{ color: "964b00" }}>
          <img
            alt="TimeLux Watches"
            src="/image/logo.jfif"
            style={{
              height: 20,
              width: 20,
            }}
          />{" "}
          <span style={{ color: "#964b00" }}>TimeLux Watches</span>
        </NavbarBrand>
        <Collapse navbar>
          {userData?.userType === "admin" ? (
            <Nav className="me-auto ms-5 gap-5" navbar>
              <NavItem>
                <NavLink to="/admin/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/products">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/orders">Orders</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/user">User</NavLink>
              </NavItem>
            </Nav>
          ) : (
            <>
              <Nav className="me-auto ms-5 gap-5" navbar>
                <NavItem>
                  <NavLink to="">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/men">Men</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/women">Women</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/kids">Kids</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/About">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/Contact">Contact Us</NavLink>
                </NavItem>
              </Nav>
              <input
                style={{
                  outline: "none",
                  color: "#000000a6",
                }}
                className="border-0 rounded-1 p-2 ps-2"
                type="text"
                placeholder="Search your text here....!"
                value={searchQuery}
                onChange={handleSearch}
              />
              <Search className="ms-2" color="#f5f5dc" />
            </>
          )}

          {JSON.stringify(userData) !== "{}" ? (
            <User2
              className="userIcon ms-4 me-4"
              onClick={() => navigate("/profile")}
            />
          ) : (
            <Button
              style={{
                backgroundColor: "#383534",
              }}
              className="ms-4 me-4"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </Collapse>
      </Navbar>
      <div className="container">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 mb-3" key={product.id}>
              <CardCom data={product} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Slider data={searchQuery ? filteredProducts : originalProducts} />
      </div>
    </div>
  );
}

export default HeaderCom;
