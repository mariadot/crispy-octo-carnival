import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckInfo  from './DeckInfo';

export default class DeckList extends React.Component {
  render() {
    return (
      <View style={styles.list}>
        <Text>Decks</Text>
        <DeckInfo navigation={this.props.navigation} />
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