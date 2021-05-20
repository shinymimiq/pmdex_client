import { connect } from "react-redux";
import { useState } from "react";

import SearchResults from "./SearchResults.component";

import {
  searchPMByName,
  clearSearch,
} from "../../redux/pm-overview/pm-overview.actions";

// import "./Search.css";

const Search = ({ searchPMByName }) => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="flex-shrink mr-2">
      <input
        className="rounded h-8 focus:outline-none focus:ring
         focus:border-blue-300 focus:bg-green-200 focus:"
        type="text"
        placeholder="Search for pokemon"
        onChange={(e) => {
          // We don't want to display a long list when user
          // only type a single character
          if (e.target.value.length >= 2) {
            searchPMByName(e.target.value);
            setIsSearch(true);
          } else {
            setIsSearch(false);
          }
        }}
        onBlur={(e) => {
          setIsSearch(false);
          e.target.value = "";
          // Maybe we want to clear search results?
          // clearSearch();
        }}
      />
      <SearchResults isSearch={isSearch} />
    </div>
  );
};

// Currently search is performed on the pmOverview data
// TODO: Consider Replace it with a dedicated search view.
const mapDispatchToProps = (dispatch) => ({
  searchPMByName: (name) => dispatch(searchPMByName(name)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(null, mapDispatchToProps)(Search);
