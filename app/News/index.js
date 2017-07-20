import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


class News extends Component {

    static navigationOptions = {
        // title 可以这样设置成一个函数， state 会自动传过来
        title: ({state}) => `${state.params.name}`,
    };
    render() {
        return (
            <View>
                <Text>News</Text>
            </View>
        );
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        console.log(params)
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

export default News;
