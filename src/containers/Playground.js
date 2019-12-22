import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Player from './Player'
import Dealer from './Dealer'

export default Playground = ({deck}) => {
    return (
        <View style={styles.container}>
            <Player deck={deck}/>
            <Dealer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
