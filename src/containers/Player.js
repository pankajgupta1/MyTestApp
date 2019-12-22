import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardStack from '../components/CardStack'
import Button from '../components/Button'
import CountBox from '../components/CountBox'

export default Player = ({ onPressHit, onPressStand, playerCards, winner, turnComplete }) => {
    let weight = playerCards.reduce((accumulator, current) => accumulator + current.Weight, 0)
    return (
        <View style={styles.container}>
            <Text>Player</Text>
            {(weight < 22 && !turnComplete) && <View style={styles.buttonsWrapper}>
                <Button text={"Hit"} onPressButton={onPressHit} />
                <Button text={"Stand"} onPressButton={onPressStand} />
            </View>}
            {winner !== '' && (winner === 'player'
                ? <Text style={styles.win}>{'Won'}</Text>
                : <Text style={styles.lost}>{'Lost'}</Text>)
            }
            <CardStack
                cards={playerCards}
                weight={weight}
            />
            <CountBox dollars={weight} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        marginTop: 50,
        alignItems: 'center'
    },
    buttonsWrapper: {
        flexDirection: 'row',
        marginBottom: 20
    },
    win: {
        color: 'green',
        fontSize: 24,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: 'green'
    },
    lost: {
        color: 'red',
        fontSize: 24,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        borderColor: 'red'
    },
})
