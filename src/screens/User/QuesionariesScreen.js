import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Center, flexBackground, flexRow, width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import { CheckedSvgComponent, LoginSvg, SignUpSvg } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { InputField, TouchableTextView } from '../../components/Custom/CustomFields'
import { CustomTouchableOpacity } from '../../utility/CustomView'
import { SpacerVertical } from '../../utility/Spacer'
import { navigate } from '../../route/RootNavigation'

const QuestionariesScreen = () => {
    const [selectedAnswer, setselectedAnswer] = useState('');

    const answersArr = [
        {
            key: 1,
            title: `A.  echo "Hello World!"`
        },
        {
            key: 2,
            title: `B.  Document.write("Hello World!")`
        },
        {
            key: 3,
            title: `C.  Document.write(hello world)`
        },
        {
            key: 4,
            title: `D.  response.write("hello world")`
        },

    ]

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20, flex: 1, marginTop: 35 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ ...flexRow, justifyContent: 'space-between' }}>
                        <AppText text={`Quiz: 100`} size={20} />
                        <AppText text={`15:00 min`} size={20} />
                    </View>
                    <SpacerVertical marginVertical={20}>
                        <AppText
                            text={`Q1. What is the correct javascript syntax to write 'Hello World!'`}
                            size={20}
                            color='black'
                            style={{ lineHeight: 30 }}
                        />
                    </SpacerVertical>


                    {answersArr.map((item, index) => {
                        return (<InputField key={index} editable={false} value={item.title} showIcon={selectedAnswer == item.key ? <CheckedSvgComponent /> : false} onPress={() => {
                            setselectedAnswer(item.key);
                        }}
                            style={selectedAnswer == item.key && { borderColor: colors.primary, borderWidth: 2 }}
                        />)
                    })}

                </View>
                <TouchableTextView value={'Sign up'} onPress={() => {
                    navigate('Result')
                }} />
            </View>
        </View>
    )
}

export default QuestionariesScreen

const styles = StyleSheet.create({})