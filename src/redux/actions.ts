import ACTIONS from "./actions.config";

export const getCountriesSuccessAction = (c: any) => ({
  type: ACTIONS.GET_COUNTRIES_SUCCESS,
  payload: { c }
});
    