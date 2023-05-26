import { Text } from 'react-native';
import React from 'react';
import { colors } from '../styles/colors';
import {
  fontSize,
  largeMediumStyle,
  LargeTextStyle,
  normalTextStyle,
  fonts,
  mediumTextStyle,
  fontfamily,
} from '../styles/CommonStyling';
import { AppConstant, arabicLanguageKey } from '../constants/AppConstant';

export const Headings = ({
  text = '',
  style = {},
  color = colors.primary,
  size = 22,
  // fontFamily = fonts.medium,
}) => {
  return (
    <Text
      style={{
        // ...mediumTextStyle,
        fontSize: size,
        color: color,
        textAlign: AppConstant.activeLanguage == arabicLanguageKey ? 'right' : null,
        fontFamily: fonts.bold,
        ...style,
      }}>
      {text}
    </Text>
  );
};

export const AppText = ({
  text = '',
  style = {},
  color = colors.blue,
  topSpace,
  bottomSpace,
  size = 15,
  numberOfLines,
  ellipsizeMode,
  fontFamily = fonts.medium,
}) => {
  return (
    <Text numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        {
          ...mediumTextStyle,
          fontSize: size,
          color: color,
          marginTop: topSpace,
          textAlign: AppConstant.activeLanguage == arabicLanguageKey ? 'right' : 'left',
          marginBottom: bottomSpace,
          fontFamily: fontFamily,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};
