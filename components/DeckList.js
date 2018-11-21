import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckList extends React.Component {
  render() {
    return (
      <View style={styles.list}>
        <Text>Deck list</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});