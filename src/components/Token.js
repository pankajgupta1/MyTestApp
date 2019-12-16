import React from 'react'
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export default Token = ({weight, setBiddedAmount}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.wrapper} onPress={()=> setBiddedAmount(weight)}>
            <Text>{weight}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        borderWidth: 1,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginHorizontal: 4
    }
})
