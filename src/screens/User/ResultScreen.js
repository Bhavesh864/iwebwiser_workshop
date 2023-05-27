
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import { CheckedSvgComponent, ResultSvgComponent } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate, replace } from '../../route/RootNavigation'
import ResultScoreComponent from '../../components/User/ResultScoreComponent'
import { AppConstant } from '../../constants/AppConstant'

const ResultScreen = ({ route, navigation }) => {
    const finalResult = route?.params?.result;
    const percentage = finalResult?.percentage.toFixed(2)
    const resultStatus = percentage > 50 ? 'Well done! You have got' : 'You are failed!';

    AppConstant.showConsoleLog('finalResult', finalResult);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20, flex: 1, marginTop: 20, }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', width: width, marginVertical: 10, }}>
                        <ResultSvgComponent />
                    </View>
                    <SpacerVertical marginVertical={15} style={{ alignItems: 'center', justifyContent: 'space-evenly', height: 110 }}>
                        <AppText text='Quiz completed successfully' size={20} color='black' style={{ fontWeight: 'light' }} />
                        <AppText text={resultStatus} size={30} color='black' style={{ fontWeight: 'bold' }} />
                        <AppText text={`${percentage}% Score`} size={32} color={colors.primary} style={{ fontWeight: 'bold' }} />
                    </SpacerVertical>
                    <ResultScoreComponent finalResult={finalResult} />
                </ScrollView>
                <AppText text='Thank you for your time we really appreciate your efforts.' size={16} color={colors.greyLightText} style={{ textAlign: 'center', marginVertical: 20 }} />
                <TouchableTextView value={'Go to Home'} onPress={() => {
                    replace('Options')
                }} />
            </View>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({})