import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 * 换行
 */
class newLine extends Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#ccc',
        borderWidth:0.7,
        marginTop:8,
        marginBottom:8
    }
});

export default newLine;
