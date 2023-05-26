
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Center, flexBackground, flexRow, width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import { CheckedSvgComponent, LoginSvg, SignUpSvg, WelcomeScreenSvg } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { CustomTouchableOpacity } from '../../utility/CustomView'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'
import { Checkbox } from '../../components/Custom/CustomFields'

const SelectOptionsScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const questionsArr = [
    {
      key: 1,
      title: 'Javascript'
    },
    {
      key: 2,
      title: 'CSS'
    },
    {
      key: 3,
      title: 'HTML'
    },
  ]

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: 20, flex: 1, marginTop: 35 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 25 }}>
            <AppText text='Welcome to' size={16} color='grey' />
            <AppText text='iWebwiser Workshop 2023' size={20} color='black' />
          </View>

          <View style={{ alignItems: 'center', width: width, marginBottom: 30 }}>
            <WelcomeScreenSvg />
          </View>
          <SpacerVertical marginVertical={15}>
            <AppText text='Select Your Language' size={20} color='black' />
          </SpacerVertical>

          {questionsArr.map((item, index) => {
            return (<InputField key={index} editable={false} value={item.title} showIcon={selectedLanguage == item.title ? <CheckedSvgComponent /> : false} onPress={() => {
              setSelectedLanguage(item.title);
            }}
              style={selectedLanguage == item.title && { borderColor: colors.primary, borderWidth: 2 }}
            />)
          })}

        </ScrollView>
        <TouchableTextView value={'Start Questionaries'} onPress={() => {
          navigate('Questions', { title: selectedLanguage });
        }} />
      </View>
    </View>
  )
}

export default SelectOptionsScreen

const styles = StyleSheet.create({})