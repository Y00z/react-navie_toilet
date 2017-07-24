import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 * 热门推荐
 */
class Recommend extends Component {

    render() {
        return (
            <View>
                <Text>热门推荐</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Recommend;
