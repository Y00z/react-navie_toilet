import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Search from './Search/index';
//分类
import Category from './Category/index';
//热门推荐
import Recommend from './Recommend/index';
//推荐专题
import Topic from './Topic/index';
//横线
import Hr from './newLine';
import require from './../utils/request';

class News extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hotTopic: null, //热门推荐
            recommendTopic: null, //推荐专题
            category: null, //分类
            other: null,     //热门推荐 清新一刻
            isLoading: false  //数据是否加载完毕
        }
    }

    render() {
        return (
            <View style={{padding:10}}>
                <Search/>
                <Hr/>
                {
                    this.state.isLoading
                        ?
                        <View>
                            <Topic name="推荐专题" data={this.state.recommendTopic}/>
                            <Recommend/>
                            <Category/>
                            <Recommend/>
                        </View>
                        :
                        <ActivityIndicator
                            size="large"
                            color="#aa3300"
                        />
                }

            </View>
        );
    }

    componentWillMount() {
        // const {params} = this.props.navigation.state;
        // console.log(params)
        require.get("http://123.57.39.116:3000/data/read?type=config", null)
            .then((response) => {
                this.setState({
                    hotTopic: response.data.hotTopic,
                    recommendTopic: response.data.recommendTopic,
                    category: response.data.category,
                    other: response.data.other,
                    isLoading: true
                })
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
});

export default News;
