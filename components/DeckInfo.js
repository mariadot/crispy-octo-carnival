import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckInfo extends React.Component {
  render() {
    const { deck } = this.props;
    const questions = deck.questions ? deck.questions.length : 0;
    return (
      <View style={styles.info}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('ViewDeck', { deckId: deck.id })}>
          <Text>{deck.title}</Text>
          <Text>{questions} { questions > 1 ? 'cards' : 'card'}</Text>
          </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    padding: 10,
    margin: 5, 
    alignItems: 'center',
    borderRadius: 5,
  },
});