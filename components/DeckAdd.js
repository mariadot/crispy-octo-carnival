import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckAdd extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Add Deck'
    }
  }

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
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});