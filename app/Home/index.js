import React, {Component} from 'react';
import {StyleSheet, Text, View,WebView} from 'react-native';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            map_live_url : 'http://123.57.39.116:3000/html/nearby.html',
        }
    }


    render() {
        return (
            <WebView
                //source={{uri: this.state.map_live_url}}
                source={require('./../../lib/html/nearby.html')}
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
