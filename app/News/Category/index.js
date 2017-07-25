import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Util from './../../utils/conf'

/**
 * 分类
 */
class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }


    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}>
                    {this._render()}
                </View>
            </View>
        );
    }

    _render = () => {
        var itemArr = []
        var response = this.state.data;
        if (response != null) {
            response.map((data, index) => {
                itemArr.push(
                    <View key={index} style={styles.itemStyle}>
                        <Text>{data.text}</Text>
                    </View>
                )
            })
        }
        return itemArr
    }
}

const styles = StyleSheet.create({
    itemStyle: {
        height: 70,
        width: Util.size.width / 2 - 15,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
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

export default Category;
