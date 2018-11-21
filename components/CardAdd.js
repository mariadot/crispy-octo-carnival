import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

export default class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleInputChange = (e) => {
    this.setState(()=>({
      name
    }))
  }

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.question}>
        <Text>Add a new card to your deck</Text>
        <View>
          <Text>Question</Text>
          <TextInput value={question} style={styles.input} onChange={this.handleInputChange} />
          <Text>Answer</Text>
          <TextInput value={answer} style={styles.input} onChange={this.handleInputChange} />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>console.log('Add deck!')}>
          <Text>Create</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    backgroundColor: 'salmon',
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