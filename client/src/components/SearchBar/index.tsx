import { Search as SearchIcon } from "@mui/icons-material";
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from "./components";

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
    </SearchWrapper>
  );
};

export default SearchBar;
