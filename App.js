import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{
 
  render(){
    return(
    <View style={{backgroundColor:"rgb(170, 255, 238)", flex:1}}>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
   

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)


