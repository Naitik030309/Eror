import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Attendance App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'cadetblue',
    height:100
  },
  text:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
  }
});
