import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default DollarBox = ({dollars}) => {
    return (
        <View style={styles.wrapper}>
            <Text>{`$${dollars}`}</Text>
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
    }
})
