import { service } from "../components/services/index";
import { getCountriesSuccessAction } from "./actions";
export const getCountriesAction = () => {
  return async (dispatch: any) => {
    const result = await service.getCountries();
    dispatch(getCountriesSuccessAction(result.data));
  };
};
