/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, YellowBox} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, CameraRoll} from 'react-native';
import {TabBarBottom, createStackNavigator, TabNavigator} from 'react-navigation';
import Home from "./screens/home";
import Me from "./screens/me";
import Diary from "./screens/diary";
import Chat from "./screens/chat";
import Plan from "./screens/plan";
import Login from "./screens/login";
import Register from "./screens/register";
import ImageBrowser from "./screens/imageBrowser";
import About from "./screens/about"

const HomeTab = createStackNavigator(
  {
    HomeTab: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  }
)

const MeTab = createStackNavigator(
  {
    MeTab: {
      screen: Me,
      navigationOptions: {
        header: null
      }
    },
    About: {
      screen: About
    }
  }
)

const DiaryTab = createStackNavigator(
  {
    DiaryTab: {
      screen: Diary,
      navigationOptions: {
        header: null
      }
    },
    ImageBrowser: {
      screen: ImageBrowser
    }
  },
  {
     initialRouteName: "DiaryTab",
  }
)

const ChatTab = createStackNavigator(
  {
    ChatTab: {
      screen: Chat,
      navigationOptions: {
        header: null
      }
    }
  }
)

const PlanTab = createStackNavigator(
  {
    PlanTab: {
      screen: Plan,
      navigationOptions: {
        header: null
      }
    }
  }
)

const LoginTab = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: Register
    }
  },
  {
     initialRouteName: "Login",
  }
)

const RootTab = TabNavigator (
  {
    Discover: HomeTab,
    Plan: PlanTab,
    Diary: DiaryTab,
    Chat: ChatTab,
    Me: MeTab,
  },
  {
    initialRouteName: "Discover",
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state;
      let params = routes && routes[1] && routes[1].params;
      switch(routeName) {
        case "Discover":
          var icon = require('./res/icons/Discover.png')
          break;
        case "Plan":
          var icon =require('./res/icons/Plan.png')
          break;
        case "Diary":
          var icon = require('./res/icons/Diary.png')
          break;
        case "Chat":
          var icon =require('./res/icons/Chat.png')
          break;
        case "Me":
          var icon = require('./res/icons/Me.png')
      }
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          return (  <Image
                      style={{width: '100%',
                              height: 30,
                              tintColor: tintColor}}
                      source={icon}
                      resizeMode="contain"
                    /> )
        },
        tabBarVisible:
          params && params.hideTabBar != null ? !params.hideTabBar : true,
        swipeEnabled:
          params && params.hideTabBar != null ? !params.hideTabBar : true
      };
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  }
)

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {loggedIn: false};
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login = () => {this.setState({loggedIn: true})}
  logout = () => {this.setState({loggedIn: false})}

  render() {
    console.disableYellowBox = true;
    return (this.state.loggedIn ? <RootTab /> : <LoginTab screenProps={this.login}/> );
  }
}
