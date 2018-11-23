import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import {Container, Content, Header, Body,Right, Left, Icon, Thumbnail} from 'native-base';

import billtopup from '../src/BillTopUp/billtopup';

class Rootstack extends Component {

    render() {
      return (
        <MyApp />
      );
    }
  }

const MyApp = createStackNavigator({ 
  billtopup: {
    screen: billtopup
  }
})
const AppContainer = createAppContainer(MyApp);
export default AppContainer;