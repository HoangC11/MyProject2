import * as React from 'react'
import {View, Text,  TouchableOpacity, StyleSheet} from 'react-native'
import {Sizes, Functions} from '@dungdang/react-native-basic'

const CustomButton = (props) => {
    const {arrayIsEmpty, stringIsEmpty, objectIsNull} = Functions
    const {
        type, 
        onPress,
        containerStyle,
        textStyle,
        title
    }
         = props

    return(
        <TouchableOpacity style={containerStyle === undefined ? styles.touch : containerStyle}>
            {type === 'send' ? 
            <View style={styles.send}>
                
            </View>
            : 
            (
            <Text style={textStyle === undefined ? styles.text : textStyle}>{title === undefined ? 'NHẤN VÀO' : stringIsEmpty(title) ? title : title.toUpperCase()}</Text>
            )
            }
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touch: {
        width: '90%',
        paddingVertical: Sizes.h20,
        paddingHorizontal: Sizes.h28,
        backgroundColor: '#3498db',
        alignSelf: 'center',
        borderRadius: Sizes.h48,
        marginVertical: Sizes.h20,
    },
    text: {
        color: 'white',
        fontSize: Sizes.s35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    send: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export {CustomButton}