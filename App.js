/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  constructor(){
    super()
    this.state={}
      this.state.customStyles={
        color:'red'
      }
  setInterval(()=>{
    if (this.state.customStyles.color=='red') {
      this.setState({
        customStyles:{
          color:'green'
        }
      })
    }else{
      this.setState({
        customStyles:{
          color:'red'
        }
      })
    }
    
  }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome,this.state.customStyles]}>Welcome to Bangladesh</Text>
        <Text style={styles.instructions}>mohib</Text>
      </View>
    );
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
    color:'blue'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    backgroundColor: 'green',
    
  },
});
