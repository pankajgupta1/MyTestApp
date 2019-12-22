import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from '../components/Card'

export default Player = ({deck}) => {
    return (
        <View style={styles.container}>
            <Card value={deck[0].Value} suit={deck[0].Suit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
