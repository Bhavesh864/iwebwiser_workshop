import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { width } from '../../styles/CommonStyling'
import { SignUpSvg } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'
import { useDispatch } from 'react-redux'
import { setAppStatus } from '../../store/actions/AppAction'

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  const onSignupPress = () => {
    if (!fullName) {
      seterror('fullname');
      return;
    }
    if (!email || !email.endsWith('.com') || !email.includes('@')) {
      seterror('email');
      return;
    }
    if (!password || password.length < 6) {
      seterror('password');
      return;
    }
    if (!phone || phone.length < 10) {
      seterror('phone');
      return;
    }
    dispatch(setAppStatus(2));
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20, flex: 1, marginTop: 35 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', width: width }}>
            <SignUpSvg />
          </View>
          <SpacerVertical marginVertical={20}>
            <AppText text='Register Yourself' size={20} color='black' />
          </SpacerVertical>
          <InputField
            error={error == 'fullname' ? 'Please enter your full name!' : null}
            placeholder='Full Name'
            autoCapital='words'
            onTextChange={(text) => {
              if (error == 'fullname') {
                seterror(null)
              }
              setfullName(text);
            }}
            value={fullName}
          />
          <InputField
            error={error == 'email' ? 'Please enter a valid email!' : null}
            placeholder='Email'
            keyboardType='email-address'
            onTextChange={(text) => {
              if (error == 'email') {
                seterror(null)
              }
              setemail(text);
            }}
            value={email}
          />
          <InputField
            error={error == 'password' ? 'Please enter a valid password!' : null}
            placeholder='Password'
            secureTextEntry={true}
            onTextChange={(text) => {
              if (error == 'password') {
                seterror(null)
              }
              setpassword(text);
            }}
            value={password}
          />
          <InputField
            maxLength={10}
            error={error == 'phone' ? 'Please enter a valid phone number!' : null}
            placeholder='Phone number'
            keyboardType='numeric'
            onTextChange={(text) => {
              if (error == 'phone') {
                seterror(null)
              }
              setphone(text);
            }}
            value={phone}
          />
        </ScrollView>
        <TouchableTextView value={'Sign up'} onPress={onSignupPress} />
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})