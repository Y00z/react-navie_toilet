import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Search from './Search/index';
//分类
import Category from './Category/index';
//热门推荐
import Recommend from './Recommend/index';
//推荐专题
import Topic from './Topic/index';
import Hr from './newLine';


class News extends Component {

    static navigationOptions = {
        // title 可以这样设置成一个函数， state 会自动传过来
        title: ({state}) => `${state.params.name}`,
    };

    render() {
        return (
            <View style={{padding:10}}>
                <Search/>
                <Hr/>
                <Topic/>
                <Recommend/>
                <Category/>
                <Recommend/>
            </View>
        );
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        console.log(params)
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
});

export default News;
