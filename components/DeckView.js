import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckView extends React.Component {
  render() {
    return (
      <View style={styles.deck}>
        <Text>I'm a deck!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
