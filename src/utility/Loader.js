import React, { useEffect, useState } from 'react';
import { colors } from '../styles/colors';
import { View, StyleSheet, ActivityIndicator, Image, Animated } from 'react-native';
import { AppText, Headings } from './TextUtility';


export const Loader = ({
  color = colors.primary,
  backgroundColor = 'rgba(0,0,0,0.5)',
}) => {
  // const [loadingText, setLoadingText] = useState('Loading...');
  // const [fadeAnim] = useState(new Animated.Value(0));
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setLoadingText(loadingText => {
  //       if (loadingText === 'Loading...') {
  //         return 'Loading';
  //       } else if (loadingText === 'Loading') {
  //         return 'Loading.';
  //       } else if (loadingText === 'Loading.') {
  //         return 'Loading..';
  //       } else if (loadingText === 'Loading..') {
  //         return 'Loading...';
  //       }
  //     });
  //   }, 500);
  //   Animated.loop(
  //     Animated.sequence([
  //       Animated.timing(fadeAnim, {
  //         toValue: 1,
  //         duration: 1000,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(fadeAnim, {
  //         toValue: 0,
  //         duration: 1000,
  //         useNativeDriver: true,
  //       }),
  //     ])
  //   ).start();
  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <View style={[styles.loader,]}>
      {/* <ActivityIndicato r  size={'large'} color={'red'} /> */}
      <ActivityIndicator size={'large'} color={color} style={styles.loader} />
      {/* <Animated.Image source={require('../assets/images/Group13.png')} style={{ width: 60, opacity: fadeAnim }} resizeMode='contain' />
      <Headings text={loadingText} color={colors.white} size={18} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    // backgroundColor: 'rgba(255,255,255,0.2)',
    zIndex: 1,
  },
  loaderC: {
    padding: 10,
    borderRadius: 10,
  },
});
