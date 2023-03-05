import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import SearchBar from "components/SearchBar";

const TopNav = () => (
  <AppBar>
    <Toolbar>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <SearchBar />
    </Toolbar>
  </AppBar>
);

export default TopNav;
