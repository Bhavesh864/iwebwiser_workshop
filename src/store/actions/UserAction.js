// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Store } from 'redux';

import { AppConstant, englishLanguageKey } from '../../constants/AppConstant';
import { AppToastMessage } from '../../constants/SnakeBar';
import {
  ADDLABTESTURL,
  ADDRADIOLOGYTESTURL,
  AddmedicationUrl,
  DoctorDetailUrl,
  GetCurrentMedicationUrl,
  GetSinglePatient,
  GetVirtualLinkURL,
  LOGOUTURL,
  PatientDetailUrl,
  editProfileUrl,
  logOutUrl,
  loginUrl,
  otpVerifyUrl,
  registerUrl,
  userDetailsUrl,
} from '../../services/baseUrls';
import {
  apiHeader,
  GetRequest,
  PostRequest,
  AuthorizeApiHeader,
  FormDataApiHeader,
  FormDataAuthApiHeader,
} from '../../services/request';
import { CHANGE_APP_STATUS, SET_PATIENT_DETAILS, SET_USER_DATA } from '../types';
import { AppStatusType, ChangeAppLanguage, setAppLoader, setAppStatus, setDashboardNavigation } from './AppAction';
import { store } from '..';

// --------------------- User Login ---------------------
export const LoginAction = async (data) => {
  try {
    const res = await PostRequest({
      url: `${loginUrl}`,
      header: { ...apiHeader },
      body: data,
    });
    if (res && res.status) {
      let token = res?.data?.accessToken;
      AppConstant.setAccessToken(token);
      AppConstant.accessToken = token;
      console.log('token======>', token);
      await AsyncStorage.setItem('access_token', JSON.stringify(token));
    }
    console.log('login======>', res);
    return res;
  } catch (error) {
    console.log('login error---->', error);
  }
};


// --------------------- User Details ---------------------
export const UserDetailsAction = async () => {
  try {
    const res = await GetRequest({
      url: `${DoctorDetailUrl}`,
      header: {
        ...AuthorizeApiHeader,
        Authorization: `Bearer ${AppConstant.accessToken}`,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};


// ------------------ Fetching User Details -----------------
export const GetUserDetails = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoader(true))
      UserDetailsAction().then(res => {
        if (res?.status) {
          dispatch(setUserDetails(res));
        } else {
          console.log('details-> ', res?.message);
        }
        dispatch(setAppLoader(false))
      });
    } catch (error) {
      console.log('catch-->', error);
    }
  };
};



// --------------------- AsyncToken  ---------------------
export const AsyncToken = async token => {
  console.log('aysnc token===============', token);
  await AsyncStorage.setItem('token', JSON.stringify(token));
};



export const AsyncSignin = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      const appLanguage = await AsyncStorage.getItem("language");
      console.log('local token--> ', token);
      AppConstant.showConsoleLog("saved app language", appLanguage);
      if (appLanguage) {
        AppConstant.setActiveLanguage(appLanguage);
        dispatch(ChangeAppLanguage(appLanguage));
      } else {
        AppConstant.setActiveLanguage(englishLanguageKey);
      }
      if (!token) {
        AppConstant.setAccessToken(null);
        dispatch(setAppStatus(AppStatusType.auth));
      } else {
        AppConstant.setAccessToken(JSON.parse(token));
        dispatch(setAppStatus(AppStatusType.dashboard));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const setUserDetails = data => {
  try {
    return {
      type: SET_USER_DATA,
      payload: data,
    }
  } catch (error) {
    console.log(error);
  }
};



export const sliderHandle = () => {
  return async dispatch => {
    await AsyncStorage.setItem('slider', JSON.stringify('true'));
    dispatch(setAppStatus(AppStatusType.auth));
  };
};
// ///////////////////////////////////////////////////////////////////////////////////////////

// --------------------------Logoutfunction--------------------------------------------->

export const LogOutAction = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoader(true))
      const res = await GetRequest({
        url: `${LOGOUTURL}`,
      });
      console.log('logout res===> ', res);
      if (res?.status) {
        AppConstant.setAccessToken(null);
        dispatch(setAppStatus(AppStatusType.auth));
        dispatch(setPatientDetail(null));
        AppToastMessage('Log out Successfully');
        await AsyncStorage.removeItem('access_token');
      }
      dispatch(setAppLoader(false))
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};

// ///////////////////////////////////////////////////////////////////////////////


// number of customer in waiting in marhsal
// list of pop up message
// 
// query params request in react native 

  // const fetchData = async () => {
  //   try {
  //     const queryParams = {
  //       param1: 'value1',
  //       param2: 'value2',
  //       // Add more query parameters as needed
  //     };

  //     const url = `https://api.example.com/endpoint?${new URLSearchParams(queryParams).toString()}`;

  //     const response = await fetch(url);
  //     const json = await response.json();

  //     setData(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };