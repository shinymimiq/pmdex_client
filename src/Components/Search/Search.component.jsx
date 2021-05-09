import { connect } from "react-redux";

import {
  searchPMByName,
  clearSearch,
} from "../../redux/pm-overview/pm-overview.actions";

import "./Search.css";

const Search = ({ searchPMByName, clearSearch }) => {
  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for pokemon"
        onChange={(e) => searchPMByName(e.target.value)}
      />
      {/* TODO: Clear the search field */}
      <span className="clear-search" onClick={() => clearSearch()}>
        &#215;
      </span>
    </div>
  );
};

// Currently search is performed on the pmOverview data
// TODO: Replace it with a dedicated search view.
const mapDispatchToProps = (dispatch) => ({
  searchPMByName: (name) => dispatch(searchPMByName(name)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(null, mapDispatchToProps)(Search);
