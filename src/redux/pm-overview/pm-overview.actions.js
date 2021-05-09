import { pmOverviewActionTypes } from "./pm-overview.types";

export const searchPMByName = (name) => ({
  type: pmOverviewActionTypes.SEARCH_PM_BY_NAME,
  payload: name,
});

export const clearSearch = () => ({
  type: pmOverviewActionTypes.CLEAR_SEARCH,
});
