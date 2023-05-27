import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react';
import { Center, height, width } from '../styles/CommonStyling'
import { setAppStatus } from '../store/actions/AppAction';
import { useDispatch } from 'react-redux';
import { AsyncSignin } from '../store/actions/UserAction';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(AsyncSignin());
    }, 2000);
  }, []);


  return (
    <View >
      <View style={styles.cont}>
        <View style={{ flex: 1 }}>
          <Image source={require("../assets/images/splash.png")} style={{ height: height, width: width, resizeMode: "cover" }} />
        </View>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  cont: {
    ...Center,
  },
  logoImg: {
    height: 200,
    width: 250,
    resizeMode: "contain",
  }
});