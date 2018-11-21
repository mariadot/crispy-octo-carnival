import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { saveDeckName } from '../utils/api';

export default class DeckAdd extends React.Component {
  state = {
    name: ''
  }

  handleInputChange = (name) => {
    this.setState(()=>({
      name
    }))
  }

  addNewDeck = (name) => {
    if(name){
      saveDeckName(name)
      this.props.navigation.navigate('ViewDeck', { deckId: name });
    } else {
      alert('Please input the necessary values');
    }
  }

  render() {
    const { name } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.new}>
        <Text>What is the title of your new deck?</Text>
        <TextInput value={name} style={styles.input} onChangeText={this.handleInputChange} />
        <TouchableOpacity style={styles.button} onPress={()=>this.addNewDeck(this.state.name)}>
          <Text>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  new: {
    flex: 1,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
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