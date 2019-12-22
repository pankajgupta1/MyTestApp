import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CardStack from '../components/CardStack'
import CountBox from '../components/CountBox'

export default Dealer = ({dealerCards}) => {
    let weight = dealerCards.reduce((accumulator, current) => accumulator + current.Weight, 0)
    return (
        <View style={styles.container}>
            <Text>Dealer</Text>
            <CardStack
                cards={dealerCards}
                weight={weight}
            />
            <CountBox dollars={weight} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center'
    }
})
