import React, { useState } from 'react'
import { View, Text } from 'react-native'
import BidBox from './BidBox'
import Playground from './Playground'
import DollarBox from '../components/DollarBox'
import { getDeck } from '../constants'

export default Home = () => {

    const [moneyAvailable, setMoneyAvailable] = useState(1000);
    const [moneyInBidBox, setMoneyInBidBox] = useState(0);
    const [bidMoneyLocked, setBidMoneyLocked] = useState(false);

    const Deck = getDeck()
    console.log('Deck', Deck)

    const setBiddedAmount = bidded => {
        if (moneyInBidBox <= moneyAvailable && (moneyInBidBox + bidded) <= moneyAvailable) {
            setMoneyInBidBox(moneyInBidBox + bidded)
        }
    }

    const onBidLocked = () => {
        setMoneyAvailable(moneyAvailable - moneyInBidBox)
        setBidMoneyLocked(true)
    }

    return (
        <View>
            <DollarBox dollars={moneyAvailable} />
            {!bidMoneyLocked && <BidBox
                moneyAvailable={moneyAvailable}
                moneyInBidBox={moneyInBidBox}
                setBiddedAmount={setBiddedAmount}
                onBidLocked={onBidLocked}
            />}
            {bidMoneyLocked && <Playground
            
            /> }
        </View>
    )
}