import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'
import Button from '../components/Button'
import Token from '../components/Token'
import CountBox from '../components/CountBox'


export default BidBox = ({moneyAvailable, setBiddedAmount, moneyInBidBox, onBidLocked}) => {
    const tokenWeights = [ 1, 5, 10, 50, 100, 500 ]
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.row}>
                {tokenWeights.map(weight => {
                    if(weight <= moneyAvailable)
                    return <Token weight={weight} setBiddedAmount={setBiddedAmount}/>
                })}
            </ScrollView>
            <CountBox dollars={`$${moneyInBidBox}`} />
            {moneyInBidBox >= 10 && <Button text={"Done"} onPressButton={onBidLocked} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        padding: 20,
        margin: 15,
    },
    row: {
        paddingBottom: 20
    }
})
