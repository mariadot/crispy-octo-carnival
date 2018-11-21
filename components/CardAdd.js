import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddCard extends React.Component {
  render() {
    return (
      <View style={styles.question}>
        <Text>Add Card</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    backgroundColor: 'salmon',
    alignItems: 'center',
  },
});