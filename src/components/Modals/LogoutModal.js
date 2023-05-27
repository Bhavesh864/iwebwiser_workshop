import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { CloseSvg, LoginScreenIcon, SplashScreenIcon } from '../../assets/svg/AppSvg';
import { colors } from '../../styles/colors';
import {
  Border,
  BorderBottom,
  Center,
  flexRow,
  flexSpaceBetween,
  fonts,
  height,
} from '../../styles/CommonStyling';
import { AppText } from '../../utility/TextUtility';


const LogoutModal = ({ close, submit }) => {
  return (
    <Modal
      animationType="fade"
      onRequestClose={() => {
        close(false);
      }}
      onDismiss={() => {
        close(false);
      }}
      transparent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          // return false;
          close(false);
        }}
        style={styles.modalContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            return false;
          }}
          style={styles.container}>
          <View style={{ marginBottom: 10 }}>
            <Image
              style={styles.appImage}
              source={require('../../assets/images/logo.png')}
            />
            <AppText
              fontFamily={fonts.semiBold}
              text={`User Logout`}
              size={18}
              style={{
                alignSelf: 'center',
                textAlign: 'center',
              }}
            />
            <AppText
              fontFamily={fonts.medium}
              text={`Are you sure you want to logout ?`}
              style={styles.mainContent}
            />
          </View>
          <View style={styles.btnsView}>
            <TouchableOpacity onPress={() => close(false)} style={styles.btn}>
              <AppText
                size={16}
                color={colors.primary}
                text="Cancel"
                fontFamily={fonts.medium}
              />
            </TouchableOpacity>
            <View style={styles.border} />
            <TouchableOpacity onPress={() => {
              submit()
              close(false)
            }
            } style={styles.btn}>
              <AppText
                size={16}
                color={colors.red}
                text="Logout"
                fontFamily={fonts.medium}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    ...Center,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    // height: 250,
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 12,
    ...Border,
  },
  appImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 15,
  },
  mainContent: {
    alignSelf: 'center',
    textAlign: 'center',
    // lineHeight: 20,
    marginHorizontal: 15,
    marginTop: 10,
  },
  btnsView: {
    paddingVertical: 15,
    ...flexRow,
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
  },
  border: {
    height: '100%',
    borderWidth: 0.7,
    borderColor: colors.borderColor,
    backgroundColor: colors.borderColor,
  },
  btn: {
    width: '50%',
    ...Center,
  },
});

export default LogoutModal;
