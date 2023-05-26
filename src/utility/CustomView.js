import React, { useState } from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { colors } from '../styles/colors';
import { Center, flexBackground } from '../styles/CommonStyling';
import { AppStatusBar } from '../constants/AppStatusBar';
import { AppConstant, englishLanguageKey } from '../constants/AppConstant';

export const CustomHeaderView = ({ children, style = {} }) => {
  return (
    <SafeAreaView style={[style]}>
      <AppStatusBar backgroundColor={colors.white} />
      {children}
    </SafeAreaView>
  );
};

export const CustomScrollView = ({
  children,
  style = {},
  bounces = false,
  horizontal = false,
}) => {
  return (
    <ScrollView
      horizontal={horizontal}
      bounces={bounces}
      showsVerticalScrollIndicator={false}
      style={[flexBackground, style]}>
      {children}
    </ScrollView>
  );
};

export const CustomHorizontalScrollView = ({
  children,
  style = {},
  bounces = false,
  horizontal = true,
}) => {
  return (
    <ScrollView
      horizontal={horizontal}
      bounces={bounces}
      showsHorizontalScrollIndicator={false}
      style={[flexBackground, style]}>
      {children}
    </ScrollView>
  );
};

export const CustomTouchableOpacity = ({
  children,
  style = {},
  onPress,
  activeOpacity = 0.8,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => {
        onPress();
      }}
      style={[style]}>
      {children}
    </TouchableOpacity>
  );
};

export const CustomKeyboardAvoidingView = ({
  children,
  style,
  behavior = 'padding',
}) => {
  if (!AppConstant.isIosDevice()) {
    return <View style={[flexBackground, style]}>{children}</View>;
  } else {
    return (
      <KeyboardAvoidingView style={[flexBackground, style]} behavior={behavior}>
        {/* // keyboardVerticalOffset={keyboardVerticalOffset} */}
        {children}
      </KeyboardAvoidingView>
    );
  }
};

export const Row = ({ children, spaceBetween = false }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: AppConstant.activeLanguage == englishLanguageKey ? 'row' : 'row-reverse',
        justifyContent: spaceBetween ? 'space-between' : 'flex-start',
      }}>
      {children}
    </View>
  );
}

// export const PresciptionSeletor = ({ setLabPrepImage, type, setMedPrepImage, setRadiologyImage }) => {
//   const [select, setSelect] = useState(null);
//   const selectimage = async () => {
//     await launchCamera({ quality: 0.3 }).then(res => {
//       console.log('image res====.', res);
//       if (res.didCancel) {
//         return;
//       }
//       else {
//         setSelect(res.assets[0].uri);
//         if (type == 'medi') {
//           setMedPrepImage(res.assets)
//         } else if (type == 'lab') {
//           setLabPrepImage(res.assets)
//         } else if (type == 'Radio') {
//           setRadiologyImage(res.assets)
//         }
//         return;
//       }
//     });
//     return;
//   }
//   return (
//     <View >
//       <TouchableOpacity onPress={selectimage}>
//         <View style={{
//           width: width * 0.34,
//           height: 140, backgroundColor: colors.white,
//           ...Center, borderWidth: 1, borderColor: colors.greyWhite
//           , marginTop: 20,
//         }}>
//           {select && <Image source={{ uri: select }} style={{
//             width: width * 0.34,
//             height: 140
//           }} />}
//           {select == null && <SelectPhotoIcon />}
//         </View>
//       </TouchableOpacity>
//     </View>
//   )

// }

const styles = StyleSheet.create({
  ProfilePictureStyle: {
    width: 119,
    height: 112,
    backgroundColor: '#222022',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  }
});
