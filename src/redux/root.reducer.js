import { combineReducers } from "redux";

import pmOverviewReducer from "./pm-overview/pm-overview.reducer";

const rootReducer = combineReducers({
  pmOverview: pmOverviewReducer,
});

export default rootReducer;
