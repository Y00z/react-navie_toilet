import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
                var text = data.text
                itemArr.push(
                    <TouchableOpacity onPress={()=>this._onPress(text)} key={index}
                        style={styles.itemStyle}>
                    <Text>{text}</Text>
                    </TouchableOpacity>
                )
            })
        }
        return itemArr
    }

    _onPress = (text) => {
        var type = 'it'
        switch (text) {
            case '互联网':
                type = 'it';
                break;
            case '散文':
                type = 'sanwen';
                break;
            case '笑话':
                type = 'cookies';
                break;
            case '管理':
                type = 'manager';
                break;
            default :
                type = 'it';
                break;
        }
        this.props.popToList(text, type)
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
        marginBottom: 10
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
