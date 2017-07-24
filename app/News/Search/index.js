import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';


class Search extends Component {

    render() {
        return (
            <View style={{marginTop:8}}>
                <TextInput underlineColorAndroid="transparent"
                           style={styles.headerInputStyle} placeholder="搜索"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerInputStyle: {
        borderWidth:1,
        borderRadius:5,
        borderColor:'gray',
        height:28,
        paddingLeft:10
    },
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

export default Search;
