import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Image style={{ width: 350, height: 70}}
            source={require('../assets/img.jpg.jpg')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  }
});

