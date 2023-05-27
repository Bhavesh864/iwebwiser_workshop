import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors'
import { AppText } from '../../utility/TextUtility'
import { flexRow } from '../../styles/CommonStyling'

const ResultScoreComponent = ({ finalResult }) => {
    const totalAttemptedQues = finalResult?.correct + finalResult?.incorrect + finalResult?.skip;

    return (
        <View style={styles.container}>
            <View style={{ ...flexRow, justifyContent: 'space-between', padding: 5 }}>
                <AppText text='Attempted :' size={20} color='black' />
                <AppText text={totalAttemptedQues} size={20} color='black' />
            </View>
            <View style={styles.hairline} />
            <View style={{ ...flexRow, justifyContent: 'space-between', padding: 5 }}>
                <AppText text='Correct :' size={20} color='black' />
                <AppText text={finalResult?.correct} size={20} color='black' />
            </View>
            <View style={styles.hairline} />
            <View style={{ ...flexRow, justifyContent: 'space-between', padding: 5 }}>
                <AppText text='Wrong :' size={20} color='black' />
                <AppText text={finalResult?.incorrect} size={20} color='black' />
            </View>
            <View style={styles.hairline} />
            <View style={{ ...flexRow, justifyContent: 'space-between', padding: 5 }}>
                <AppText text='Skkiped :' size={20} color='black' />
                <AppText text={finalResult?.skip} size={20} color='black' />
            </View>
        </View>
    )
}

export default ResultScoreComponent

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.greyWhite,
        margin: 10
    },
    hairline: {
        backgroundColor: colors.lightGrey,
        height: 2,
    },
})