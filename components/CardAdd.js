import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import { addCardToDeck } from '../utils/api';

export default class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  // Controlled component
  handleQuestionChange = (question) => {
    this.setState(()=>({
      question
    }))
  }

  // Controlled component
  handleAnswerChange = (answer) => {
    this.setState(()=>({
      answer
    }))
  }

  createNewCard = (question, answer, deck) => {
    if(question && answer){
      addCardToDeck(question, answer, deck);
      this.props.navigation.navigate('ViewDeck', { deckId: deck });
    } else {
      alert('Please input the necessary values');
    }
  }

  render() {
    const { question, answer } = this.state;
    const { deck } = this.props.navigation.state.params;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.question}>
        <Text>Add a new card to your deck</Text>
        <View>
          <Text>Question</Text>
          <TextInput value={question} style={styles.input} onChangeText={this.handleQuestionChange} />
          <Text>Answer</Text>
          <TextInput value={answer} style={styles.input} onChangeText={this.handleAnswerChange} />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>this.createNewCard(question, answer, deck)} >
          <Text>Create</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    margin: 20
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