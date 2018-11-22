import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { getDeck } from '../utils/api';

export default class DeckQuiz extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { deck } = navigation.state.params;
    return {
      title: deck
    }
  }

  state = {
    deck: {},
    currentCardIndex: 0
  }

  componentDidMount(){
    getDeck(this.props.navigation.state.params.deck)
    .then(
      (deck) => {
        this.setState(()=>({
        deck
      }))
    }
    );
  }

  onGuessAnswer(guess){
    if(guess === 'yes'){
      console.log('hooray!');
    } else {
      console.log('better luck next time');
    };
  }

  render() {
    const questions = this.state.deck.questions ? this.state.deck.questions : [];
    const currentQuestion = this.state.currentCardIndex;
    return (
      <View style={styles.quiz}>
        <Text>Let's quiz!</Text>
        <Card card={questions[currentQuestion]} onGuessAnswer={this.onGuessAnswer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quiz: {
    flex: 1,
    backgroundColor: 'lightcyan',
  },
});