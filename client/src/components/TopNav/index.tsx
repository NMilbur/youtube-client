import { AppBar, Container, Toolbar } from "@mui/material";
import SearchBar from "components/SearchBar";

const TopNav = () => (
  <AppBar>
    <Toolbar>
      <Container maxWidth="xs">
        <SearchBar />
      </Container>
    </Toolbar>
  </AppBar>
);

export default TopNav;
