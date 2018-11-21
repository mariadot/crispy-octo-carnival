import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckQuiz extends React.Component {
  render() {
    return (
      <View style={styles.quiz}>
        <Text>Let's quiz!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quiz: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
  },
});