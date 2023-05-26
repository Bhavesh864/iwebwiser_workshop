// import AsyncStorage from '@react-native-async-storage/async-storage';


import { store } from '..';
import { AppConstant } from '../../constants/AppConstant';
import { APPOINTMENTIDCONFIRMATIONURL, GETLABSUGGESTIONUrl, GETPHARMACYSUGGESTIONUrl, GETRADIOLOGYTESTURL, GetLabTestsCategoryUrl, GetSuggestRadiologyURL } from '../../services/baseUrls';
import { AuthorizeApiHeader, GetRequest, PostRequest } from '../../services/request';
import { CHANGE_APP_STATUS, APP_LOADER, CHANGE_APP_LANGUAGE } from '../types';

// --------------------- AppStatus Types ---------------------
export const AppStatusType = {
  splash: 0,
  auth: 1,
  dashboard: 2,
};

// --------------------- AppStatus ---------------------
export const setAppStatus = payload => {
  return {
    type: CHANGE_APP_STATUS,
    payload,
  };
};

// --------------------- AppLoader ---------------------
export const setAppLoader = (payload) => {
  try {
    return {
      type: APP_LOADER,
      payload,
    };
  } catch (error) {
    console.log('apploader', error);
  }
};







