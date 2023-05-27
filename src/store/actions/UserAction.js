import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppConstant } from '../../constants/AppConstant';
import { AppToastMessage } from '../../constants/SnakeBar';
import {
  DoctorDetailUrl,
  LOGOUTURL,
  getCategoriesUrl,
  getQuestinariesUrl,
  getUserDetailsUrl,
  loginUrl,
  logoutUrl,
  signupUrl,
  startExamUrl,
  submitResultsUrl,
} from '../../services/baseUrls';
import {
  apiHeader,
  GetRequest,
  PostRequest,
  AuthorizeApiHeader,
} from '../../services/request';
import { SET_USER_DATA } from '../types';
import { AppStatusType, setAppLoader, setAppStatus } from './AppAction';
import { store } from '..';





// --------------------- AsyncSignin ---------------------
export const AsyncSignin = () => {
  return async dispatch => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      console.log('local token--> ', token);

      if (!token) {
        AppConstant.setAccessToken(null);
        dispatch(setAppStatus(AppStatusType.auth));
      } else {
        AppConstant.setAccessToken(JSON.parse(token));
        AppConstant.accessToken = JSON.parse(token);
        UserDetailsAction().then(res => {
          console.log(res);
          dispatch(setAppStatus(AppStatusType.dashboard));
        }).catch(err => {
          console.log('userDetailsErr', err);
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
}

// --------------------- Auth ---------------------

export const LoginAction = async (data) => {
  console.log(data);
  try {
    const res = await PostRequest({
      url: `${loginUrl}`,
      headers: { ...apiHeader },
      body: data,
    });
    if (res && res.status) {
      let token = res?.user?.token;
      let id = res?.user?.id;
      AppConstant.setAccessToken(token);
      AppConstant.accessToken = token;
      AppConstant.setUserId(id);
      AppConstant.userId = id;
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
  console.log('token arra h', AppConstant.accessToken);
  try {
    const res = await GetRequest({
      url: `${getUserDetailsUrl}`,
      header: {
        ...apiHeader,
        Authorization: `Bearer ${AppConstant.accessToken}`,
      },
    });
    if (res && res.status) {
      let token = res?.user?.token;
      let id = res?.user?.id;
      AppConstant.setAccessToken(token);
      AppConstant.accessToken = token;
      AppConstant.setUserId(id);
      AppConstant.userId = id;
      console.log('token======>', token);
      store.dispatch(setUserDetails(res));
      await AsyncStorage.setItem('access_token', JSON.stringify(token));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const SignUpAction = async (data) => {
  console.log(data);
  try {
    const res = await PostRequest({
      url: `${signupUrl}`,
      headers: { ...apiHeader },
      body: data,
    });
    console.log('login======>', res);
    return res;
  } catch (error) {
    console.log('login error---->', error);
  }
};


export const LogOutAction = async () => {
  try {
    const res = await GetRequest({
      url: `${logoutUrl}`,
    });
    console.log('logout res===> ', res);
    if (res?.status) {
      AppConstant.setAccessToken(null);
      store.dispatch(setAppStatus(AppStatusType.auth));
      store.dispatch(setUserDetails(null));
      AppToastMessage('Log out Successfully');
      await AsyncStorage.removeItem('access_token');
      AppConstant.setAccessToken(null);
      AppConstant.accessToken = null;
    }
    return res;
  } catch (error) {
    console.log('werr', error);
  }
};


// --------------------- App Flowise ---------------------

export const GetLanguageCategories = async () => {
  try {
    const res = await GetRequest({
      url: `${getCategoriesUrl}`,
      header: {
        ...AuthorizeApiHeader,
        Authorization: `Bearer ${AppConstant.accessToken}`,
      },
    });

    if (res?.status) {
      console.log('result', res);
    }
    return res;

  } catch (error) {
    console.log('catch-->', error);
  }
};


export const startExamWithSelectedLang = async (data) => {
  try {
    const res = await PostRequest({
      url: `${startExamUrl}`,
      headers: { ...apiHeader },
      body: data,
    });
    if (res && res.status) {
      return res;
    }
    console.log('login======>', res);

  } catch (error) {
    console.log('login error---->', error);
  }
};


export const getQuestinaries = async (selectedLangId) => {
  try {
    const res = await GetRequest({
      url: `${getQuestinariesUrl}/${selectedLangId}`,
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


export const submitResultsAction = async (data) => {
  try {
    const res = await PostRequest({
      url: `${submitResultsUrl}`,
      headers: { ...apiHeader },
      body: {
        answer: JSON.stringify(data)
      },
    });

    if (res && res.status) {
      return res;
    }
    console.log('login======>', res);

  } catch (error) {
    console.log('login error---->', error);
  }
};


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