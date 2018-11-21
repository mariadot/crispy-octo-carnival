import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getDeck } from '../utils/api';

export default class DeckView extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { deckId } = navigation.state.params;

    return {
      title: deckId
    }
  }

  state = {
    deck: {}
  }

  componentDidMount(){
    getDeck(this.props.navigation.state.params.deckId)
    .then(
      (deck) => {
        this.setState(()=>({
        deck
      }))
    }
    );
  }

  render() {
    const { deck } = this.state;
    const questions = deck.questions ? deck.questions.length : 0;
    console.log(this.state.deck);
    return (
      <View style={styles.deck}>
        <Text>{deck.title}</Text>
        <Text>{questions} { questions > 1 ? 'cards' : 'card'}</Text>
        <TouchableOpacity style={[styles.button]} onPress={()=> this.props.navigation.navigate('AddCard', { deck: deck.title })} >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={()=> this.props.navigation.navigate('ViewQuiz', { deck: deck.title })} >
          <Text>Start quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    color: 'white',
    padding: 10
  }
});
