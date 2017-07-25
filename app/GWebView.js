import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, WebView} from 'react-native';


class GWebView extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.title}`,
    });

    constructor(props) {
        super(props)
        this.state = {
            isLoadError: false,
            url: 'http://www.baidu.com'
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View style={{flex:1}}>
                {
                    this.state.isLoadError
                        ?
                        <Text style={styles.loadErrorText}>SORRY,加载出错.</Text>
                        :
                        <WebView
                            source={{uri : params.url}}
                            onError={()=>this._onError()}
                            //加载中Loading
                            startInLoadingState={true}
                        />
                }
            </View>
        );
    }

    _onError = () => {
        this.setState({
            isLoadError: true
        })
    }
}

const styles = StyleSheet.create({
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
