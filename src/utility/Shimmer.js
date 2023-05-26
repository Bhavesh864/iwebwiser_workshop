import React from 'react';
import { View, Text } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const Shimmer = () => {
    return (
        <SkeletonPlaceholder borderRadius={4}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                <View style={{ marginLeft: 20, }}>
                    <View style={{ width: 200, height: 6, borderRadius: 4 }} />
                    <View style={{ marginTop: 10, width: 80, borderRadius: 4, height: 6 }} />
                    <View style={{ marginTop: 10, width: 180, borderRadius: 4, height: 6 }} />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};

export default Shimmer;

