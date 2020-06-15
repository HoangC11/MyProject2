import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from '../components/login/Login';

import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';

import Home from '../components/home/Home';
import KhachHang from '../components/home/KhachHang';
import ThongKe from '../components/home/ThongKe';

import DonHangContainer from './DonHangContainer'




const TabNavigator = createBottomTabNavigator({
  Home: DonHangContainer,
  KhachHang: KhachHang,
  ThongKe: ThongKe


});

const TAB = createAppContainer(TabNavigator);

const RootStack = createStackNavigator(
  {
    Init: {
      screen: TAB,
    },
    Login: {
      screen: Login,
    },

    MyModal: {
      screen: TAB,
    },


  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
