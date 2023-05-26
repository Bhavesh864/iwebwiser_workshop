import { CHANGE_APP_STATUS, APP_LOADER, CHANGE_APP_LANGUAGE } from '../types';

const initialState = {
  appStatus: 0,
  loader: false,
  appLanguage: "EN",
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APP_STATUS:
      return { ...state, appStatus: action.payload };
    case APP_LOADER:
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};

export default AppReducer;
