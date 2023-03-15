import { Search as SearchIcon } from "@mui/icons-material";
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from "./components";
import { useState } from "react";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
