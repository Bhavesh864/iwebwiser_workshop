import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shimmer from './Shimmer'
import { width } from '../styles/CommonStyling'
import { colors } from '../styles/colors'

const ShimmerComponent = ({ data }) => {
    return (
        <View>
            {data.map((item, i) => {
                return <View key={i} style={[{
                    width: width * 0.95,
                    justifyContent: 'center',
                    paddingLeft: 20,
                    marginBottom: 15,
                    height: 120, backgroundColor: colors.white,
                }]}>
                    <Shimmer />
                </View>
            })}
        </View>
    )
}

export default ShimmerComponent

const styles = StyleSheet.create({})