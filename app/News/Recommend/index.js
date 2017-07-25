import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Util from './../../utils/conf'

/**
 * 热门推荐
 */
class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            type: this.props.type
        }
    }

    render() {
        return (
            <View>
                <Text>{this.props.name}</Text>
                <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}>
                    {this._renderData()}
                </View>
            </View>
        );
    }

    _renderData = () => {
        var itemArr = []
        var response = this.state.data;
        if (response != null) {
            response.map((data, index) => {
                itemArr.push(
                    <TouchableOpacity onPress={()=>this.props.popToDetail(data.url,data.title)} key={index}
                                      style={styles.itemStyle}>
                        <Image style={styles.imageStyle} source={{uri:data.img}}/>
                        <Text numberOfLines={2} style={styles.textStyle}>{data.title}</Text>
                    </TouchableOpacity>
                )
            })
        }
        return itemArr
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 11
    },
    itemStyle: {
        width: Util.size.width / 4 - 10,
    },
    imageStyle: {
        width: Util.size.width / 4 - 10,
        height: 120,
        borderRadius: 3
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

export default Recommend;
