import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SpacerVertical } from '../../utility/Spacer'
import { InputField } from '../Custom/CustomFields'
import { CheckedSvgComponent } from '../../assets/svg/AppSvg'
import { AppText } from '../../utility/TextUtility'
import { flexRow, width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'
import AnwersOptionsComponent from './AnwersOptionsComponent'

const QuestionAndOptions = ({ item, index, selectedAnswer, setselectedAnswer, onPressSkip, setselectedOptionkey }) => {
    const [optionsArr, setOptionsArr] = useState([item?.first_option, item?.second_option, item?.third_option, item?.fourth_option]);
    const [answersArr, setanswersArr] = useState(['first_option', 'second_option', 'third_option', 'fourth_option']);


    const getAlphabetFromIndex = (index) => {
        if (index == 0) {
            return 'A. ';
        }
        if (index == 1) {
            return 'B. ';
        }
        if (index == 2) {
            return 'C. ';
        }
        if (index == 3) {
            return 'D. ';
        }
        return '';
    }



    return (
        <View style={{ width: width, paddingRight: 50 }}>
            <View style={{ marginVertical: 10, ...flexRow }} >
                <AppText text={`Q${index + 1}. `} size={18} color='black' style={{ alignSelf: 'flex-start' }} />
                <AppText
                    text={`${item?.name}`}
                    size={16}
                    color='black'
                    style={{ lineHeight: 22, alignSelf: 'flex-start' }}
                />
            </View>


            {optionsArr.map((item, index) => {
                return (
                    <View
                        key={index}
                        style={{ ...flexRow }}>
                        <AppText text={`${getAlphabetFromIndex(index)}`} />
                        <AnwersOptionsComponent
                            text={item}
                            icon={selectedAnswer == item ? <CheckedSvgComponent /> : false}
                            onPress={() => {
                                setselectedAnswer(item);
                                setselectedOptionkey(answersArr[index]);
                            }}
                            style={selectedAnswer == item && { borderColor: colors.primary, borderWidth: 1 }}
                        />
                        {/* <InputField
                            isDescription={true}
                            editable={false}
                            value={`${item}`}
                            showIcon={selectedAnswer == item ? <CheckedSvgComponent /> : false}
                            onPress={() => {
                                setselectedAnswer(item);
                                setselectedOptionkey(answersArr[index]);
                            }}
                            style={selectedAnswer == item && { borderColor: colors.primary, borderWidth: 1 }}
                        /> */}
                    </View>
                )

            })}
            <TouchableOpacity style={{ width: '40%', alignSelf: 'center' }} onPress={onPressSkip}>
                <AppText
                    text='Skip >>'
                    size={20}
                    color={colors.grey}
                    style={{ fontWeight: 'light', textAlign: 'center', marginVertical: 20, alignSelf: 'center' }}

                />
            </TouchableOpacity>
        </View >
    )
}

export default QuestionAndOptions

const styles = StyleSheet.create({})