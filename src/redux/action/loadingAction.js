import { END_LOADING, START_LOADING } from "../type/loadingType";

export const startLoadingAction = () => {
  return {
    type: START_LOADING,
  };
};

export const endLoadingAction = () => {
  return {
    type: END_LOADING,
  };
};
