/**
 * @flow
 */

import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Home  from './Home/index'
import News  from './News/index'
import Setting  from './Setting/index'
import Weather  from './Weather/index'
import webView  from './GWebView'

//主页面
const MyHomeScreen = ({navigation}) => (
    <Home navigation={navigation} banner="Home Screen"/>
    // <MyNavScreen banner="Home Screen" />
);
//阅读页面
const MyNewsScreen = ({navigation}) => (
    <News banner="News Screen" navigation={navigation}/>
);
//天气页面
const MyWeatherScreen = ({navigation}) => (
    <Weather banner="Weather Screen" navigation={navigation}/>
);
//设置页面
const MySettingsScreen = ({navigation}) => (
    <Setting banner="Settings Screen" navigation={navigation}/>
);

//跳转到Profile页面
// const MyProfileScreen = ({navigation}) => (
//     <MyNavScreen
//         banner={`${navigation.state.params.name}s Profile`}
//         navigation={navigation}
//     />
// );
//跳转到Notifications页面
// const MyNotificationsSettingsScreen = ({navigation}) => (
//     <MyNavScreen banner="Notifications Screen" navigation={navigation}/>
// );


//4个Tab页面
const TabNav = TabNavigator(
    {
        MainTab: {
            screen: MyHomeScreen,
            path: '/',
            navigationOptions: {
                // title: 'Welcome',
                tabBarLabel: '找厕所',
                header: null,        //去掉头部标签
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        NewsTab: {
            screen: MyNewsScreen,
            path: '/',
            navigationOptions: {
                // title: 'news',
                tabBarLabel: '阅读',
                header: null,        //去掉头部标签
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={focused ? 'ios-book' : 'ios-book-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        WeatherTab: {
            screen: MyWeatherScreen,
            path: '/',
            navigationOptions: {
                // title: 'Weather',
                tabBarLabel: '天气',
                header: null,        //去掉头部标签
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={focused ? 'ios-cloud' : 'ios-cloud-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
        SettingsTab: {
            screen: MySettingsScreen,
            path: '/settings',
            navigationOptions: {
                // title: 'Settings',
                tabBarLabel: '设置',
                header: null,        //去掉头部标签
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={focused ? 'ios-settings' : 'ios-settings-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
                ),
            },
        },
    },
    {   //显示在底部
        tabBarPosition: 'bottom',
        //显示动画
        animationEnabled: true,
        swipeEnabled: false,
    }
);
//头部标签
const StacksOverTabs = StackNavigator({
    Root: {
        screen: TabNav,
    },
    //注册页面，
    Detail: {
        // path: 'people/:name',
        screen: webView,
    }

    // NotifSettings: {
    //     screen: MyNotificationsSettingsScreen,
    //     navigationOptions: {
    //         title: 'Notifications',
    //     },
    // },
    // Profile: {
    //     screen: MyProfileScreen,
    //     path: '/people/:name',
    //     navigationOptions: ({navigation}) => {
    //         title: `${navigation.state.params.name}'s Profile!`;
    //     },
    // },
});

export default StacksOverTabs;
