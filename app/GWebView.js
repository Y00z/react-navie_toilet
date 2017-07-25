import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, WebView} from 'react-native';


class GWebView extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Detail with ${navigation.state.params.user}`,
    });

    constructor(props) {
        super(props)
        this.state = {
            isLoadError: true
        }
    }

    render() {
        const { params } = this.props.navigation.state;

        return (
            <View>
                <Text>详情页</Text>
                <Text>{params.user}</Text>
            </View>
        );
    }

    _onError = () => {
        this.setState({
            isLoadError: true
        })
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

export default GWebView;
