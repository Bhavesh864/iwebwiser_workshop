import { Dimensions, Platform } from 'react-native';
import { colors } from './colors';

export const fonts = {
  black: 'GothicA1-Black',
  light: 'GothicA1-Light',
  regular: 'GothicA1-Regular',
  medium: 'GothicA1-Medium',
  bold: 'GothicA1-Bold',
  semiBold: 'GothicA1-SemiBold',
  extraBold: 'GothicA1-ExtraBold',
};

export const statusBar = {
  dark: 'dark-content',
  light: 'light-content',
  default: 'default',
};

export const flexEnd = {
  justifyContent: 'flex-end',
  alignItems: 'center'
}
export const flexCenter = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const rowCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Center = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const flexRow = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const flexSpaceBetween = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const flexSpaceAround = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
};

export const SpaceAround = {
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const SpaceBetween = {
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const flexBackground = {
  flex: 1,
  // backgroundColor: colors.white,
};



export const fontSize = {
  large: 22,
  normal: 14,
  small: 12,
  verySmall: 10,
  medium: 18,
  largeMedium: 20,
  veryLarge: 30,
};

export const normalTextStyle = {
  fontSize: fontSize.normal,
  fontFamily: fonts.semiBold,
  color: colors.white,
  lineHeight: 18,
};

export const smallTextSize = {
  fontSize: fontSize.small,
  // fontFamily: fonts.regular,
  color: colors.black,
};

export const mediumTextStyle = {
  fontSize: fontSize.medium,
  color: colors.black,
  fontFamily: fonts.medium,
};

export const largeMediumStyle = {
  fontSize: fontSize.largeMedium,
  // fontFamily: fonts.medium,
  color: colors.black,
};

export const LargeTextStyle = {
  fontSize: fontSize.large,
  // fontFamily: fonts.medium,
  color: colors.black,
  fontWeight: 'bold',
};

export const HeavyTextStyle = {
  fontSize: fontSize.veryLarge,
  // fontFamily: fonts.medium,
  color: colors.black,
};

export const Border = {
  borderColor: colors.borderColor,
  borderWidth: 1,
};

export const BorderBottom = {
  borderBottomColor: colors.borderColor,
  borderBottomWidth: 1,
};

export const TextCenter = {
  alignSelf: 'center',
  textAlign: 'center',
};

export const { width, height } = Dimensions.get('screen');
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;
