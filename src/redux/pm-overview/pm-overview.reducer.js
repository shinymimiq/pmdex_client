import { PM_OVERVIEW } from "./pm-overview.data";
import { pmOverviewActionTypes } from "./pm-overview.types";

const INIT_STATE = { data: PM_OVERVIEW };

const pmOverviewReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case pmOverviewActionTypes.SEARCH_PM_BY_NAME:
      return {
        ...state,
        data: state.data.filter((pm) =>
          pm.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case pmOverviewActionTypes.CLEAR_SEARCH:
      return INIT_STATE;
    default:
      return state;
  }
};

export default pmOverviewReducer;
