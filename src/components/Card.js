import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default Card = ({data, cardStyle}) => {
    return (
        <View style={[styles.wrapper, cardStyle]}>
            <Text>{data.Value}</Text>
            <Text>{data.Suit}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        height: 140,
        width: 80,
        backgroundColor: 'white'
    }
})
