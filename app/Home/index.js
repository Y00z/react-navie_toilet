import React, {Component} from 'react';
import {StyleSheet, Text, View,WebView} from 'react-native';


class Home extends Component {

    render() {
        return (
            <WebView
                source={{uri: 'http://123.57.39.116:3000/html/nearby.html'}}
            />
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

export default Home;
