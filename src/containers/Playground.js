import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Player from './Player'
import Dealer from './Dealer'

export default Playground = () => {
    return (
        <View style={styles.container}>
            <Player/>
            <Dealer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
