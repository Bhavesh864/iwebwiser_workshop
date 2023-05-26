import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  SafeAreaView,
  SpacerHorizontal
} from 'react-native';
import {
  Center,
  flexRow,
  flexSpaceBetween,
  fonts,
  fontSize,
  normalTextStyle,
  flexBackground,
  smallTextSize,
  keyboardVerticalOffset,
  mediumTextStyle,
  flexCenter,
  rowCenter,
  Border,
} from '../../styles/CommonStyling';
import { colors } from '../../styles/colors';
import { goBack } from '../../route/RootNavigation';
import { shadows } from '../../styles/shadow';
import { AppText, Headings } from '../../utility/TextUtility';
import { BackIconSvg, BlackBackIcon, CrossSvgComponent, TickSvg } from '../../assets/svg/AppSvg';
import { CustomTouchableOpacity } from '../../utility/CustomView';
import { width } from '../../styles/ResponsiveLayout';
import { AppConstant, englishLanguageKey } from '../../constants/AppConstant';
import { useSelector } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export const InputField = ({
  onPress = () => { },
  placeholder = 'Password',
  autoCapital = 'none',
  value,
  onTextChange,
  onFocus = () => { },
  onBlur = () => { },
  showIcon,
  isDescription = false,
  error,
  password = false,
  style = {},
  activeBorderColor,
  textStyle = {},
  keyboardType = 'default',
  maxLength = 30,
  leftIcon,
  label,
  editable = true,
  multiline = false,
  scrollEnabled = true,
  secureTextEntry = false,
}) => {
  const [activeField, setActiveField] = useState(false);
  // const [secureTextEntry, setSecureTextEntry] = useState(password);
  const inputPasswordWidth =
    activeField && !isDescription
      ? {
        border: 1,
        borderColor: activeBorderColor
          ? activeBorderColor
          : colors.borderColor,
      }
      : {};
  return (
    <>
      {label && (
        <AppText
          text={label}
          style={{
            marginBottom: 0,
            marginHorizontal: 40,
            fontFamily: fonts.regular,
          }}
          size={16}
        />
      )}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[
          styles.InputView,
          inputPasswordWidth,
          { flexDirection: 'row-reverse' },
          { borderWidth: 1, borderColor: colors.borderColor },
          isDescription ? { maxHeight: 140, height: 140 } : { alignItems: 'center' },
          error ? { borderColor: colors.red, borderWidth: 0.8 } : null,
          style,
        ]}>
        {showIcon && <View style={{}}>{showIcon}
        </View>}

        <TextInput
          value={value}
          onChangeText={text => onTextChange(text)}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          maxLength={maxLength}
          keyboardType={keyboardType}
          editable={editable}
          autoCapitalize={autoCapital}
          secureTextEntry={secureTextEntry}
          multiline={isDescription ? true : false}
          scrollEnabled={scrollEnabled}
          onFocus={() => {
            setActiveField(true);
            onFocus();
          }}
          onBlur={() => {
            setActiveField(false);
            onBlur();
          }}
          style={[
            {
              flex: 1,
              ...mediumTextStyle,
              fontSize: 18,
              color: colors.black,
              paddingLeft: showIcon && showIcon ? 10 : 10,
              textAlign: AppConstant.activeLanguage == englishLanguageKey ? "left" : "right",
              textAlignVertical: isDescription ? 'top' : 'center',
              ...textStyle,
            },
          ]}
        />

        {leftIcon && leftIcon}
      </TouchableOpacity>
      {error ? (
        <Text
          style={[
            normalTextStyle,
            { color: colors.red, paddingHorizontal: 15, top: -10 },
          ]}>
          {error}
        </Text>
      ) : null}
    </>
  );
};
export const AppName = ({ scale = 1 }) => {
  return (
    <View style={{ transform: [{ scale: scale }] }}>{/* <AppNameSvg /> */}</View>
  );
};


export const Button = ({
  title = 'Login',
  onPress = () => { },
  backgroundColor = colors.primary,
  textStyle = {},
  icon,
  style = {},
  fontSize = 24,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: backgroundColor, ...style }]}
      onPress={() => onPress()}>
      {icon && icon}
      <Text style={[styles.buttonText, { fontSize: fontSize, ...textStyle }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


export const TouchableTextView = ({
  placeholder,
  value,
  onPress = () => { },
  Icon,
  leftIcon,
  style = {},
  touchable = true,
  backgroundColor = colors.primary,
  marginBottom = 20,
  fontSize = 17,
  textColor = colors.white,
}) => {
  return (

    <TouchableOpacity
      activeOpacity={touchable ? 0.8 : 1}
      style={[
        styles.touchableTextView,
        shadows[1],
        {
          flexDirection: AppConstant.activeLanguage == englishLanguageKey ? "row" : 'row-reverse',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          marginBottom,
          justifyContent: 'center',
          width: '100%',
          paddingRight: 20
        },
        style,
      ]}
      onPress={() => (touchable ? onPress() : null)}>
      {Icon && Icon}
      <Text
        style={[
          // { color: value ? textColor : colors.off_white, paddingLeft: 10, flex: 1, textAlign: AppConstant.activeLanguage == englishLanguageKey ? "left" : "right" },
          mediumTextStyle,
          {
            color: textColor,
            paddingLeft: 10,
            fontSize: fontSize,
            fontFamily: fonts.semiBold
          },
        ]}>
        {value ? value : placeholder}
      </Text>
      {leftIcon && leftIcon}
    </TouchableOpacity>

  );
};

export const Checkbox = ({
  value = false,
  size = 20,
  backgroundColor,
  onPress = () => { },
  checkText = false,
  title,
  subtitle,

}) => {
  return (
    <View style={{ ...flexRow }}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          styles.checkbox,
          {
            backgroundColor: colors.white,
            height: size,
            width: size,
            borderColor: value ? colors.green : colors.blue,
          },
        ]}>
        {value && <TickSvg />}
      </TouchableOpacity>
      {value && checkText && (
        <Headings
          text=" Checked"
          size={fontSize.normal}
          color={colors.green}
        />
      )}
    </View>
  );
};

export const CustomBackButton = ({
  style = {},
  iconSize = 25,
  iconName = 'chevron-back',
  iconColor = colors.black,
  scale = 1,
  onPress = () => goBack(),
}) => {
  return (
    <CustomTouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[flexRow,
        {
          height: 55,
          width: 60,
          ...Center,
          marginLeft: 5
        },
        style,
      ]}>
      <CrossSvgComponent scale={scale} iconColor={iconColor} />
    </CustomTouchableOpacity>
  );
};
export const BackButton = ({
  style = {},
  iconSize = 25,
  iconName = 'chevron-back',
  iconColor = colors.black,
  scale = 1,
  onPress = () => goBack(),
}) => {
  return (
    <CustomTouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[flexRow,
        {
          height: 55,
          width: 60,
          ...Center,
          marginLeft: 5
        },
        style,
      ]}>
      <BlackBackIcon sPcale={scale} iconColor={iconColor} />
      <AppText text={'Back'} color={colors.primary} style={{ marginLeft: 10 }} />
    </CustomTouchableOpacity>
  );
};

export const ModalHeader = ({ title = '', onPress = () => { } }) => {
  return (
    <View style={styles.modalHeader}>
      <CustomBackButton onPress={onPress} />
      <AppText size={17} style={{ marginHorizontal: 20 }} text={title} />
    </View>
  );
};

export const HeaderView = ({
  text = '',
  backgroundColor = colors.white,
  leftIcon,
}) => {
  return (
    <View
      style={{
        height: 55,
        width: '100%',
        backgroundColor: backgroundColor,
        // ...flexRow,
        ...flexSpaceBetween,
      }}>
      <View style={flexRow}>
        <CustomBackButton
          iconColor={
            backgroundColor == colors.black ? colors.white : colors?.black
          }
        />
        {text && (
          <Headings
            text={text}
            style={{ alignSelf: 'center', marginLeft: 10 }}
            color={
              backgroundColor == colors.black ? colors.white : colors?.black
            }
          />
        )}
      </View>
      {leftIcon ? leftIcon : <View />}
    </View>
  );
};

export const RadioButton = ({ backgroundColor, color = colors.blue, onpress = () => { }, style = {}, value, selected }) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[{
        width: width * 0.3,
        height: 55,
        backgroundColor,
        borderWidth: 1,
        borderColor: selected ? colors.black : colors.borderColor,
        alignItems: 'center',
        justifyContent: 'center'
      }, style]}
    >
      <AppText style={[{ color: color, fontFamily: fonts.regular, }]} text={value} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  InputView: {
    borderWidth: 0,
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    marginHorizontal: 0,
    alignItems: 'flex-start',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 10,
    width: '90%',
    height: 55,
    ...Center,
  },
  buttonText: {
    ...normalTextStyle,
    color: colors.white,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fonts.medium,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  checkbox: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    height: 30,
    width: 30,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    ...Center,
    alignSelf: 'flex-start',
  },
  closeIcon: {
    padding: 5,
    alignSelf: 'center',
    borderRadius: 20,
    // backgroundColor: colors.secondary,
    // marginTop: 10
  },
  loaderC: {
    padding: 10,
    // backgroundColor: colors.primary,
    borderRadius: 10,
  },
  modalHeader: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabView: {
    ...flexSpaceBetween,
    borderBottomColor: colors.off_white,
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 15,
  },
  tabIconView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primaryLight,
    ...Center,
    marginHorizontal: 20,
  },
  touchableTextView: {
    borderRadius: 10,
    marginVertical: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignSelf: 'center',
    height: 50,
    backgroundColor: colors.primary,
  },
  AppButton: {
    borderRadius: 30,
    marginVertical: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignSelf: 'center',
    height: 55,
  },
  touchableView: {
    // ...rowCenter,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    marginVertical: 10,
    height: 55,
  },
  touchableText: {
    ...normalTextStyle,
    fontSize: 22,
    color: colors.white,
  },
});
