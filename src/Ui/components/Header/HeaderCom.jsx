import { Search } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import "./index.css";

function HeaderCom(props) {
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
        <Nav style={{ gap: "50px" }}>
          <NavItem>
            <NavLink to="" style={{ color: "#f5f5dc" }}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/men" style={{ color: "#f5f5dc" }}>
              Men
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/women" style={{ color: "#f5f5dc" }}>
              Women
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/kids" style={{ color: "#f5f5dc" }}>
              Kids
            </NavLink>
          </NavItem>
        </Nav>
        <div>
          <input
            style={{ outline: "none", color: "#000000a6" }}
            className="border-0 rounded-1 p-2 ps-2"
            type="text"
            placeholder="Search your text here....!"
            onChange={(e) => props?.setSearchText(e?.target?.value)}
          />
          <Search className="ms-2 me-5" color="#f5f5dc" />
        </div>
      </Navbar>
    </div>
  );
}

export default HeaderCom;
