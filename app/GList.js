import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet, Text, View, Image, ListView, FlatList, Animated, ActivityIndicator} from 'react-native';
import request from './utils/request'
import Util from './utils/conf'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class GWebView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            dataArray: null,
            isLoadError: true
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    render() {
        return (
            <View style={{flex:1}}>
                {
                    this.state.isLoadError
                        ?
                        <ActivityIndicator
                            color="#0000ff"
                            size="large"
                        />
                        :
                        <AnimatedFlatList
                            data={this.state.dataArray}
                            renderItem={(item)=>this._renderItem(item)}
                        />
                }
            </View>
        );
    }

    _renderItem = (item) => {
        const {params} = this.props.navigation.state;
        const {navigate} = params.navigate
        let value = item.item.value;
        return (
            <TouchableOpacity onPress={()=>navigate('Detail', {title: value.title , url:value.url})} style={{flexDirection:'row',margin:6}}>
                <Image style={styles.itemImage} source={{uri:value.img}}/>
                <View style={{flexDirection:'column',margin:6}}>
                    <Text style={{fontSize:16,color:'black'}}>{value.title}</Text>
                    <Text style={{fontSize:11,color:'gray'}}>{value.time}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        request.get("http://123.57.39.116:3000/data/read?type=" + params.type, null)
            .then((response) => {
                let dataBlob = [];
                response.data.map((data, index) => {
                    dataBlob.push({
                        key: index,
                        value: data
                    })
                })
                this.setState({
                    data: response.data,
                    isLoadError: false,
                    dataArray: dataBlob
                })
            })


    }

    _onError = () => {
        this.setState({
            isLoadError: true
        })
    }
}

const styles = StyleSheet.create({
    itemImage: {
        width: Util.size.width / 3 - 10,
        height: 80
    },
    loadErrorText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        fontSize: 25
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

export default GWebView;
