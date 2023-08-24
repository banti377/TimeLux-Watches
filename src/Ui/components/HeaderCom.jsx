import { Search, Watch } from 'lucide-react';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function HeaderCom(args) {
  const [SearchText, setSearchText] = useState("");

  return (
    <div>
      <Navbar expand={"lg"} style={{ backgroundColor: '#BAB86C' }}>
        <NavbarBrand href="/" style={{ color: "964b00" }}>
          <img
            alt="TimeLux Watches"
            src="/image/logo.jfif"
            style={{
              height: 20,
              width: 20
            }}
          /> <span style={{ color: '#964b00' }}>TimeLux Watches</span>
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="" style={{ color: '#f5f5dc' }}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" style={{ color: '#f5f5dc' }}>Men</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" style={{ color: '#f5f5dc' }}>Women</NavLink>
          </NavItem>
          <NavItem>
          </NavItem>
        </Nav>
        <input
          style={{ outline: 'none', color: '#000000a6' }}
          className='border-0 rounded-1 p-2 w-25 ps-2 '
          type="text"
          placeholder='Search your text here....!'
          onChange={(e) => setSearchText(e?.target?.value)} />
        <Search className='ms-2 me-5'
          color="#f5f5dc" />
      </Navbar>
    </div>
  );
}

export default HeaderCom;