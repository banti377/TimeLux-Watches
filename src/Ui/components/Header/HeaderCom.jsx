import { Search, User } from "lucide-react";
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

function HeaderCom(props) {
  const userData = useSelector((state) => state?.auth?.user);
  const navigate = useNavigate();

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
                <NavLink to="">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/product">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/orders">Orders</NavLink>
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
              />
              <Search className="ms-2" color="#f5f5dc" />
            </>
          )}

          {JSON.stringify(userData) !== "{}" ? (
            <User className="userIcon ms-4 me-4" />
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
    </div>
  );
}

export default HeaderCom;
