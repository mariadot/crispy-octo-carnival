import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckInfo extends React.Component {
  render() {
    const { deck } = this.props;
    const questions = deck.questions.length;
    return (
      <View style={styles.info}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ViewDeck')}>
          <Text>{deck.title}</Text>
          <Text>{questions} { questions > 1 ? 'cards' : 'card'}</Text>
          </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    backgroundColor: 'purple',
  },
});