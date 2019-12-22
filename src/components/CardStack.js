import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from './Card'

export default CardStack = ({ cards, weight }) => {
    return (
        <View style={styles.container}>
            {cards.map((elem, index) => <Card
                data={elem}
                cardStyle={{ ...styles.cardStyle, left: index * 30, zIndex: index * 10 }}
            />
            )}
            {weight > 21 && <View style={styles.bust}>
                <Text>Bust</Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 160,
    },
    cardStyle: {
        position: 'absolute'
    },
    bust: {
        backgroundColor: 'red',
        position: 'absolute',
        borderRadius: 10,
        padding: 20,
        paddingHorizontal: 40,
        zIndex: 10000,
        left: 20,
        top: 40
    }
})
