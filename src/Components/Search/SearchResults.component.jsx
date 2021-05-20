import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

const SearchResults = ({ isSearch, search_result }) => {
  return (
    <div className="static w-full">
      <div
        className={`${
          isSearch ? "flex-col" : "hidden"
        } search-results absolute top-15 right-10 bg-blue-100`}
      >
        {search_result
          ? search_result.map((pm) => (
              // TODO: Link the result entry to the actual Pokemon page
              // <Link key={pm.id} to={`/pokemon/${pm.id}`}>
              <div
                key={pm.id}
                className="search_result_pm border bg-blue-200 w-full"
              >
                {`${pm.id}-${pm.name}`}
              </div>
              // </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

const mapStateToProps = ({ pmOverview }) => ({
  search_result: pmOverview.search_result,
});

export default connect(mapStateToProps)(SearchResults);
