// import AsyncStorage from '@react-native-async-storage/async-storage';
// import React from 'react';
// import {
//   Alert,
//   Linking,
//   PermissionsAndroid,
//   Platform,
//   ToastAndroid,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import {
//   setCurrentPosition,
//   setRunningPosition,
// } from '../store/actions/AppAction';
// import {AppConstant} from './AppConstant';

// export const getLocation = async () => {
//   const hasPermission = await hasLocationPermission();

//   if (!hasPermission) {
//     return;
//   }

//   Geolocation.getCurrentPosition(
//     position => {
//       console.log('Position Coords======> ', position);
//       let pos = {
//         latitude: -29.7535667,
//         longitude: 31.0566664,
//       };
//       // setCurrentPosition(pos);
//       // setRunningPosition(pos);
//       setCurrentPosition(position.coords);
//       setRunningPosition(position.coords);
//     },
//     error => {
//       Alert.alert(`Code ${error.code}`, error.message);
//       setCurrentPosition(null);
//       console.log(error);
//     },
//     {
//       // accuracy: {
//       //   android: 'high',
//       //   ios: 'best',
//       // },
//       enableHighAccuracy: true,
//       timeout: 10000,
//       maximumAge: 5000,
//       distanceFilter: 1,
//     },
//   );
// };

// export const hasLocationPermission = async () => {
//   if (Platform.OS === 'ios') {
//     const hasPermission = await hasPermissionIOS();
//     return hasPermission;
//   }

//   if (Platform.OS === 'android' && Platform.Version < 23) {
//     return true;
//   }

//   const hasPermission = await PermissionsAndroid.check(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   );

//   if (hasPermission) {
//     return true;
//   }

//   const status = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   );

//   if (status === PermissionsAndroid.RESULTS.GRANTED) {
//     await AsyncStorage.setItem('permission', JSON.stringify('true'));
//     return true;
//   }

//   if (status === PermissionsAndroid.RESULTS.DENIED) {
//     store.dispatch(LocationPermissonDenial(true));
//     // await AsyncStorage.setItem('permission', null);
//     ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
//   } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//     store.dispatch(LocationPermissonDenial(true));
//     // await AsyncStorage.setItem('permission', null);
//     ToastAndroid.show(
//       'Location permission revoked by user.',
//       ToastAndroid.LONG,
//     );
//   }

//   return false;
// };

// const hasPermissionIOS = async () => {
//   const openSetting = () => {
//     Linking.openSettings().catch(() => {
//       Alert.alert('Unable to open settings');
//     });
//   };
//   const status = await Geolocation.requestAuthorization('whenInUse');

//   if (status === 'granted') {
//     return true;
//   }

//   // if (status === 'denied') {
//   //   Alert.alert('Location permission denied');
//   // }

//   if (status === 'denied') {
//     Alert.alert(
//       `Turn on Location Services to allow Shy to determine your location.`,
//       '',
//       [
//         {text: 'Go to Settings', onPress: openSetting},
//         {text: "Don't Use Location", onPress: () => {}},
//       ],
//     );
//   }

//   return false;
// };

// export function GetDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//   var R = 6371;
//   var dLat = deg2rad(lat2 - lat1);
//   var dLon = deg2rad(lon2 - lon1);
//   var a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(deg2rad(lat1)) *
//       Math.cos(deg2rad(lat2)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   var distance = R * c;
//   return distance;
// }

// function deg2rad(deg) {
//   return deg * (Math.PI / 180);
// }
