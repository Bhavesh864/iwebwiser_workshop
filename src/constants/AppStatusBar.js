import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { colors } from '../styles/colors';

export const AppStatusBar = ({
  animated = true,
  backgroundColor = colors.secondary,
  barStyle = 'dark-content',
  showHideTransition = 'fade',
}) => {
  return (
    <StatusBar
      animated={animated}
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      showHideTransition={showHideTransition}
    />
  );
};
