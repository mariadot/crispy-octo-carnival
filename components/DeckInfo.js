import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckInfo extends React.Component {
  render() {
    return (
      <View style={styles.info}>
        <Text>Deck info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: 'purple',
  },
});