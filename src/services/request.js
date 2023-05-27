
import { AppConstant } from '../constants/AppConstant';
import { store } from '../store';
import { setAppLoader } from '../store/actions/AppAction';


const timeout = 30000;

export const apiHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const AuthorizeApiHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${AppConstant.accessToken}`,
};

export const FormDataApiHeader = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
};

export const FormDataAuthApiHeader = {
  'Accept': '*/*',
  'Content-Type': 'multipart/form-data',
  'Authorization': `Bearer ${AppConstant.accessToken}`,
};

export const GetRequest = async ({
  url,
  header = { ...AuthorizeApiHeader, 'Authorization': `Bearer ${AppConstant.accessToken}` },
  loader = true
}) => {
  const config = {
    method: 'GET',
    headers: header,
  };
  AppConstant.showConsoleLog('get config: ', config);
  AppConstant.showConsoleLog('get Uri:  ', url);
  try {
    if (loader) {
      store.dispatch(setAppLoader(true));
    }
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeout);
    const res = await fetch(url, config);
    const result = await res.json();
    if (loader) {
      store.dispatch(setAppLoader(false));
    }
    return result;
  } catch (error) {
    if (loader) {
      store.dispatch(setAppLoader(false));
    }
    AppConstant.showConsoleLog('error:', error);
  }
};

export const PostRequest = async ({
  url,
  body,
  header = { ...AuthorizeApiHeader, 'Authorization': `Bearer ${AppConstant.accessToken}` },
  fileupload = false,
  method = 'POST',
  loader = true,
}) => {
  AppConstant.showConsoleLog('url:', url);
  AppConstant.showConsoleLog('header:', header);
  AppConstant.showConsoleLog('body:', body);
  // return
  try {
    loader && store.dispatch(setAppLoader(true));
    const controller = new AbortController();
    setTimeout(() => controller.abort(), timeout);
    const config = {
      method: method,
      headers: header,
      body: fileupload ? body : JSON.stringify(body),
      signal: controller.signal,
    };
    AppConstant.showConsoleLog('config:', config);
    const response = await fetch(url, config);
    const result = await response.json();
    loader && store.dispatch(setAppLoader(false));
    return result;
  } catch (e) {
    store.dispatch(setAppLoader(false));
    AppConstant.showConsoleLog('error:', e);
    if (e.message == 'Aborted') {
      return false;
    }
  }
};

// export const GetRequest = async ({
//   url,
//   header = {
//     ...AuthorizeApiHeader,
//     Authorization: `Bearer ${AppConstant.userToken}`,
//   },
// }) => {
//   const config = {
//     method: 'GET',
//     headers: header,
//   };
//   AppConstant.showConsoleLog('get config: ', config);
//   AppConstant.showConsoleLog('get Uri:  ', url);
//   try {
//     const controller = new AbortController();
//     setTimeout(() => controller.abort(), timeout);
//     const res = await fetch(url, config);
//     const result = await res.json();

//     return result;
//   } catch (error) {
//     AppConstant.showConsoleLog('error:', error);
//   }
// };

// export const PostRequest = async ({
//   url,
//   body,
//   header = {
//     ...AuthorizeApiHeader,
//     Authorization: `Bearer ${AppConstant.userToken}`,
//   },
//   fileupload = false,
//   method = 'POST',
//   loader = false,
// }) => {
//   AppConstant.showConsoleLog('url:', url);
//   AppConstant.showConsoleLog('body:', body);
//   // return
//   try {
//     const controller = new AbortController();
//     setTimeout(() => controller.abort(), timeout);
//     const config = {
//       method: method,
//       headers: fileupload ? header : header,
//       body: fileupload ? body : JSON.stringify(body),
//       signal: controller.signal,
//     };
//     AppConstant.showConsoleLog('config:', config);
//     // AppConst.showConsoleLog('is Access Token:', config.headers?.Authorization == AppConst.userToken);
//     // if (DeviceConstant.isNetworkConnected) {
//     const response = await fetch(url, config);
//     const result = await response.json();
//     return result;
//     // }
//     // else {
//     //     ShowNetworkMessage();
//     //     return undefined
//     // }
//   } catch (e) {
//     AppConstant.showConsoleLog('error:', e);
//     // spinner && setSpinner(false)
//     if (e.message == 'Aborted') {
//       // alert('Service Time Out 5 sec');
//       return false;
//     }
//   }
// };
