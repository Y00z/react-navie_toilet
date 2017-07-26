import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import Util from './../utils/conf'

class Settings extends Component {

    static navigationOptions = {
        // title 可以这样设置成一个函数， state 会自动传过来
        // title: ({state}) => `${state.params.name}`,
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
                        <Image style={styles.icon} source={require('./../../resource/image/logo.png')}
                               resizeMode="contain"/>
                        <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
                            <Text style={styles.text}>功能介绍</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.item}>
                            <Text style={styles.text}>帮助中心</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.item}>
                            <Text style={styles.text}>服务条款</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={styles.item}>
                            <Text style={styles.text}>关于</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10
    },
    item:{
        height:50,
        backgroundColor:'#fff',
        borderBottomWidth: Util.pixel,
        borderColor:'#ccc',
        justifyContent: 'center'
    },
    bg:{
        backgroundColor: '#FFF',
        height:40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize:15,
        marginLeft:10,
        color: '#7E7F7E'
    },
    icon:{
        width:88,
        height:100
    }
});

export default Settings;
