import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const image = {uri:'https://cutewallpaper.org/21/green-background-design-hd/Green-Pattern-Background-Wallpaper-Light-Designs-loliful.co.jpg'}

import HomeScreen from './HomeScreen';
import SummaryScreen from './SummaryScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppHeader from './AppHeader';
export default class App extends React.Component {
  render() {
    return (
      <View>
      <ImageBackground source={image} style={{width:340,height:600}}>
        <AppHeader />
        <AppContainer />
      </ImageBackground>
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
