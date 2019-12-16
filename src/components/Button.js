import React from 'react'
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export default Button = ({text, onPressButton}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.wrapper} onPress={onPressButton}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 10,
        marginHorizontal: 4,
        backgroundColor: 'blue',
        marginTop: 10
    },
    text: {
        color: 'white',
    }
})
