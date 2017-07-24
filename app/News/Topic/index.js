import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 * 推荐专题
 */
class Topic extends Component {

    render() {
        return (
            <View>
                <Text>推荐专题</Text>
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

export default Topic;
