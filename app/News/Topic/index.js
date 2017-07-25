import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Util from './../../utils/conf'

/**
 * 推荐专题
 */
class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <View>
                <Text style={{fontSize:18,marginBottom:5}}>{this.props.name}</Text>
                <View style={{flexDirection:'row',justifyContent : 'space-between'}}>
                    {this._renderImage()}
                </View>
                <TouchableOpacity onPress={()=>this.props.popToList("同期专题","2")}>
                    <Text style={{fontSize:14,color:'gray',marginTop:5}}>查看同期专题</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _renderImage = () => {
        var itemArr = []
        var response = this.state.data;
        response.map((data, index) => {
            itemArr.push(
                <TouchableOpacity key={index} onPress={()=>this.props.popToDetail(data.url,data.title)}>
                    <Image style={styles.imageStyle} source={{uri:data.img}}/>
                </TouchableOpacity>
            )
        })
        return itemArr
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: Util.size.width / 2 - 13,
        height: 120,
        borderRadius: 6
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

export default Topic;
