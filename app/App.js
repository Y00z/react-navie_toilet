/**
 * @flow
 */

import React from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

const MyNavScreen = ({navigation, banner}) => (
    <View>
        <Text>{banner}</Text>
    </View>
);

const MyHomeScreen = ({navigation}) => (
    <MyNavScreen banner="Home Screen" navigation={navigation}/>
);

const MyNewsScreen = ({navigation}) => (
    <MyNavScreen banner="News Screen" navigation={navigation}/>
);

const MyWeatherScreen = ({navigation}) => (
    <MyNavScreen banner="Weather Screen" navigation={navigation}/>
);

const MySettingsScreen = ({navigation}) => (
    <MyNavScreen banner="Settings Screen" navigation={navigation}/>
);


const MyProfileScreen = ({navigation}) => (
    <MyNavScreen
        banner={`${navigation.state.params.name}s Profile`}
        navigation={navigation}
    />
);

const MyNotificationsSettingsScreen = ({navigation}) => (
    <MyNavScreen banner="Notifications Screen" navigation={navigation}/>
);

const TabNav = TabNavigator(
    {
        MainTab: {
            screen: MyHomeScreen,
            path: '/',
            navigationOptions: {
                title: 'Welcome',
                tabBarLabel: '找厕所',
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
                title: 'news',
                tabBarLabel: '阅读',
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
                title: 'Weather',
                tabBarLabel: '天气',
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
                title: 'Settings',
                tabBarLabel: '设置',
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
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

const StacksOverTabs = StackNavigator({
    Root: {
        screen: TabNav,
    },
    NotifSettings: {
        screen: MyNotificationsSettingsScreen,
        navigationOptions: {
            title: 'Notifications',
        },
    },
    Profile: {
        screen: MyProfileScreen,
        path: '/people/:name',
        navigationOptions: ({navigation}) => {
            title: `${navigation.state.params.name}'s Profile!`;
        },
    },
});

export default StacksOverTabs;
