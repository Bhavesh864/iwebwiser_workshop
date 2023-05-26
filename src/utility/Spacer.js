import React from 'react';
import {View} from 'react-native';

export const SpacerVertical = ({children, marginVertical = 15, style = {}}) => {
  return (
    <View style={{marginVertical: marginVertical, ...style}}>{children}</View>
  );
};

export const SpacerHorizontal = ({children, marginHorizontal = 15}) => {
  return <View style={{marginHorizontal: marginHorizontal}}>{children}</View>;
};

export const Spacer = ({
  children,
  marginHorizontal = 20,
  marginVertical = 15,
  style = {},
}) => {
  return (
    <View
      style={{
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        ...style,
      }}>
      {children}
    </View>
  );
};
