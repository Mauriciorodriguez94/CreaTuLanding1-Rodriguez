import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Button,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import CartWidget from "../CartWidget";
import "./index.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <header>LOGO</header>
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<IoChevronDown />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <CartWidget />
    </div>
  );
}

export default NavBar;
