import { connect } from "react-redux";

import {
  searchPMByName,
  clearSearch,
} from "../../redux/pm-overview/pm-overview.actions";

// import "./Search.css";

const Search = ({ searchPMByName, clearSearch }) => {
  return (
    <div className="flex-shrink mr-2">
      <input
        className="rounded h-8 focus:outline-none focus:ring
         focus:border-blue-300 focus:bg-green-200 focus:"
        type="text"
        placeholder="Search for pokemon"
        onChange={(e) => searchPMByName(e.target.value)}
      />
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
