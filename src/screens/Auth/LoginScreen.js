import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Center, flexBackground, flexRow } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import { LoginSvg } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { CustomTouchableOpacity } from '../../utility/CustomView'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'
import { useDispatch } from 'react-redux'
import { setAppStatus } from '../../store/actions/AppAction'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState(null);

    const onLoginPress = () => {
        if (!email || !email.endsWith('.com') || !email.includes('@')) {
            seterror('email');
            return;
        }
        if (!password || password.length < 6) {
            seterror('password');
            return;
        }
        dispatch(setAppStatus(2));
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