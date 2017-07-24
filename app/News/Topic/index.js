import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

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
                <Text>{this.props.name}</Text>
                <View>
                    {this._renderImage()}
                </View>
            </View>
        );
    }

    _renderImage = () => {
        var itemArr = []
        var response = this.state.data;
        response.map((data,index)=>{
            itemArr.push(
                <Image style={styles.imageStyle} source={{uri:data.img}} />
            )
        })
        return itemArr
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        width:80,
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
