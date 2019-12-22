import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import BidBox from './BidBox'
import Playground from './Playground'
import CountBox from '../components/CountBox'
import { getDeckOf3Packs } from '../constants'

export default Home = () => {

    const [moneyAvailable, setMoneyAvailable] = useState(1000)
    const [moneyInBidBox, setMoneyInBidBox] = useState(0)
    const [bidMoneyLocked, setBidMoneyLocked] = useState(false)
    const [deck, setDeck] = useState([])
    const [playerCards, setPlayerCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])
    const [turnComplete, updateTurnComplete] = useState(false)
    const [winner, setWinner] = useState('')

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
        const drawnCards = drawFourCards()
        setPlayerCards([...playerCards, drawnCards[0], drawnCards[1]])
        setDealerCards([...dealerCards, drawnCards[2], drawnCards[3]])
    }

    const drawCardForPlayer = () => {
        let playerCardsWeight = playerCards.reduce((accumulator, current) => accumulator + current.Weight, 0)
        let newDeck = [...deck]
        const drawn = newDeck.pop()
        setDeck(newDeck)
        setPlayerCards([...playerCards, drawn])
        let newPlayerCardsWeight = playerCardsWeight + drawn.Weight
        if (newPlayerCardsWeight > 21) {
            updateTurnComplete(true)
            setWinner('dealer')
            return
        }
        if (newPlayerCardsWeight === 21) {
            updateTurnComplete(true)
            updatePlayerWin()
            return
        }
    }

    const drawCardForDealer = () => {
        let newDeck = [...deck]
        const drawn = newDeck.pop()
        setDeck(newDeck)
        setDealerCards([...dealerCards, drawn])
        return drawn.Weight
    }

    const drawFourCards = () => {
        let newDeck = [...deck]
        const drawn = newDeck.splice(-4, 4)
        setDeck(newDeck)
        return drawn
    }

    const onPressHit = () => {
        drawCardForPlayer()
    }

    const hitCardForDealer = (updatedWeight, playerCardsWeight) => {
        if (updatedWeight > 21) {
            updatePlayerWin()
            return
        }
        if (updatedWeight > playerCardsWeight) {
            setWinner('dealer')
            return
        }
        if (updatedWeight > 17) {
            updatePlayerWin()
            return;
        } else {
            let weight = drawCardForDealer()
            hitCardForDealer(weight + updatedWeight)
        }

    }

    const onPressStand = () => {
        let dealerCardsWeight = dealerCards.reduce((accumulator, current) => accumulator + current.Weight, 0)
        let playerCardsWeight = playerCards.reduce((accumulator, current) => accumulator + current.Weight, 0)
        updateTurnComplete(true)
        if (dealerCardsWeight > playerCardsWeight) {
            setWinner('dealer')
            return;
        }
        if (dealerCardsWeight > 17) {
            updatePlayerWin()
            return;
        } else {
            let weight = drawCardForDealer()
            hitCardForDealer(weight + dealerCardsWeight, playerCardsWeight)
        }
    }

    const updatePlayerWin = () => {
        setWinner('player')
        setMoneyAvailable(moneyAvailable + 2 * moneyInBidBox)
    }

    const onPressContinue = () => {
        setWinner('')
        setBidMoneyLocked(false)
        updateTurnComplete(false)
        setPlayerCards([])
        setDealerCards([])
        setBidMoneyLocked(false)
        setMoneyInBidBox(0)
    }

    return (
        <View style={styles.container}>
            <CountBox dollars={`$${moneyAvailable}`} />
            {!bidMoneyLocked && <BidBox
                moneyAvailable={moneyAvailable}
                moneyInBidBox={moneyInBidBox}
                setBiddedAmount={setBiddedAmount}
                onBidLocked={onBidLocked}
            />}
            {bidMoneyLocked && <Playground
                deck={deck}
                onPressHit={onPressHit}
                onPressStand={onPressStand}
                playerCards={playerCards}
                dealerCards={dealerCards}
                winner={winner}
                turnComplete={turnComplete}
            />}
            {winner !== '' && <Button text={"Continue"} onPressButton={onPressContinue} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    }
})
