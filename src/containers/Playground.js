import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Player from './Player'
import Dealer from './Dealer'

export default Playground = ({ deck, onPressStand, onPressHit, playerCards, dealerCards, winner, turnComplete }) => {
    return (
        <View style={styles.container}>
            <Dealer dealerCards={dealerCards} />
            <Player
                onPressHit={onPressHit}
                onPressStand={onPressStand}
                playerCards={playerCards}
                winner={winner}
                turnComplete={turnComplete}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
