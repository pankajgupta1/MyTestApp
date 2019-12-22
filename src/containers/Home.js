import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import BidBox from './BidBox'
import Playground from './Playground'
import DollarBox from '../components/DollarBox'
import { getDeckOf3Packs } from '../constants'

export default Home = () => {

    const [moneyAvailable, setMoneyAvailable] = useState(1000)
    const [moneyInBidBox, setMoneyInBidBox] = useState(0)
    const [bidMoneyLocked, setBidMoneyLocked] = useState(false)
    const [deck, setDeck] = useState([])

    useEffect(() => {
        let newDeck = getDeckOf3Packs()
        setDeck(newDeck)
    }, [1])

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
                deck={deck}
            /> }
        </View>
    )
}