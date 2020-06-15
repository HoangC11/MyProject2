import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class DonHangTuan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.header}>
                    <Icon name='chevron-left' />
                    <View>

                    </View>
                    <Icon name='chevron-right' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'red'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
})