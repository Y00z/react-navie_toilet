import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator, ScrollView} from 'react-native';
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
        const {navigate} = this.props.navigation;
        return (
            <View style={{padding:10}}>
                <Search/>
                <Hr/>
                {
                    this.state.isLoading
                        ?
                        <ScrollView style={{marginBottom : 45}}>
                            <Topic name="推荐专题" data={this.state.recommendTopic}/>
                            <Hr/>
                            <Recommend name="热门推荐" data={this.state.hotTopic}
                                       popToDetail={(url,name)=>navigate('Detail', {user: 'Brent'})}/>
                            <Hr/>
                            <Category name="分类" data={this.state.category}/>
                            <Hr/>
                            <Recommend name="清新一刻" data={this.state.other} type="other"/>
                        </ScrollView>
                        :
                        <ActivityIndicator
                            size="large"
                            color="#aa3300"
                        />
                }

            </View>
        );
    }

    // //跳转到详情页面
    // popToDetail = (url, name) => {
    //     console.log(navigation)
    //
    //     // navigation.navigate('Detail')
    // }

    componentDidMount() {
        // const {billDetailActions} = this.props
        // InteractionManager.runAfterInteractions(()=>{
        //     billDetailActions.requestBillDetail()
        // })
        // const {navigate} = this.props.navigation;

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
                // console.log(response.data.hotTopic)
                // console.log(this.state.hotTopic)
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
