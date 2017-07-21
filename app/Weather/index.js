import React, {Component} from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';


class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoadError: false
        }
    }


    render() {
        return (
            <View style={{flex : 1}}>
                {
                    this.state.isLoadError ?
                        <Text style={styles.loadErrorText}>SORRY,加载出错.</Text>
                        :
                        <WebView
                            //source={{uri: this.state.map_live_url}}
                            source={require('./../../resource/html/weather.html')}
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
    loadErrorText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'black',
        fontSize: 25
    }
});

export default Weather;
