import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.new}>
        <Text>New deck</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  new: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});