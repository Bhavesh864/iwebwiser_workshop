
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import { CheckedSvgComponent, ResultSvgComponent } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'
import ResultScoreComponent from '../../components/User/ResultScoreComponent'

const ResultScreen = () => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20, flex: 1, marginTop: 35, }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', width: width, marginVertical: 20, }}>
                        <ResultSvgComponent />
                    </View>
                    <SpacerVertical marginVertical={15} style={{ alignItems: 'center', justifyContent: 'space-evenly', height: 110 }}>
                        <AppText text='Quiz completed successfully' size={20} color='black' style={{ fontWeight: 'light' }} />
                        <AppText text='Well done! You have got' size={30} color='black' style={{ fontWeight: 'bold' }} />
                        <AppText text='50% Score' size={32} color={colors.primary} style={{ fontWeight: 'bold' }} />
                    </SpacerVertical>
                    <ResultScoreComponent />
                </ScrollView>
                <AppText text='Thank you for your time we really appreciate your efforts.' size={16} color={colors.greyLightText} style={{ textAlign: 'center', marginVertical: 20 }} />
            </View>
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({})