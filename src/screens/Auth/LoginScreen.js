import { Keyboard, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { flexRow } from '../../styles/CommonStyling'
import { CancelEyeSvgComponent, EyeSvgComponent, LoginSvg } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'
import { useDispatch } from 'react-redux'
import { setAppStatus } from '../../store/actions/AppAction'
import { LoginAction, setUserDetails } from '../../store/actions/UserAction'
import { AppToastMessage } from '../../constants/SnakeBar'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [passwordShow, setpasswordShow] = useState(false);
    const [error, seterror] = useState(false);

    const onLoginPress = () => {
        Keyboard.dismiss();
        if (!email || !email.endsWith('.com') || !email.includes('@')) {
            seterror('email');
            return;
        }
        if (!password || password.length < 6) {
            seterror('password');
            return;
        }

        const data = {
            email: email,
            password: password,
            type: 'student',
        }

        LoginAction(data).then(res => {
            if (res?.status) {
                dispatch(setAppStatus(2));
                dispatch(setUserDetails(res));
            } else {
                console.log(res?.error ? res?.error : res?.message);
                AppToastMessage(res?.error ? res?.error : res?.message ? res?.message : 'Something went wrong!')
            }
        }).catch(err => {
            console.log('err', err);
        })

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20, flex: 1, marginTop: 35 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <LoginSvg />
                    <SpacerVertical marginVertical={20}>
                        <AppText text='Login with your account' size={20} color='black' />
                    </SpacerVertical>
                    <InputField
                        error={error == 'email' ? 'Please enter a valid email!' : null}
                        placeholder='Enter your email'
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
                        onIconPress={() => {
                            setpasswordShow(!passwordShow);
                        }}
                        showIcon={!passwordShow ? <EyeSvgComponent /> : <CancelEyeSvgComponent />}
                        error={error == 'password' ? 'Please enter a valid password!' : null}
                        placeholder='Password'
                        secureTextEntry={!passwordShow}
                        onTextChange={(text) => {
                            if (error == 'password') {
                                seterror(null)
                            }
                            setpassword(text);
                        }}
                        value={password}
                    />
                    <SpacerVertical style={{ ...flexRow, marginVertical: 30, alignSelf: 'center' }}>
                        <AppText text="Don't have an account? " size={18} color='black' style={{ fontWeight: 'light' }} />
                        <TouchableOpacity onPress={() => {
                            navigate('Signup');
                        }}>
                            <AppText text="Sign up" size={20} color='black' style={{ fontWeight: 'bold', textDecorationLine: 'underline' }} />
                        </TouchableOpacity>
                    </SpacerVertical>
                </ScrollView>
                <TouchableTextView value={'Sign in'} onPress={onLoginPress} />
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})