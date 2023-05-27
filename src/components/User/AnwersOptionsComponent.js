import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppText } from '../../utility/TextUtility'
import { Center, flexRow, width } from '../../styles/CommonStyling'
import { colors } from '../../styles/colors'

const AnwersOptionsComponent = ({ text, icon, onPress, style }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.container, style]}>
            <AppText text={text} size={18} color='black' style={{ width: '95%' }} />
            {icon && <TouchableOpacity onPress={onPress} style={{ alignSelf: 'center', marginRight: 10 }}>{icon}
            </TouchableOpacity>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...flexRow,
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: colors.secondary,
        padding: 15,
        marginVertical: 10,
        flex: 1
    }
})

export default AnwersOptionsComponent
