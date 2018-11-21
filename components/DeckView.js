import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckView extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Deck View'
    }
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.deck}>
        <Text>Deck title</Text>
        <Text># of cards</Text>
        <TouchableOpacity style={[styles.button]} onPress={()=> this.props.navigation.navigate('AddCard')} >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={()=> this.props.navigation.navigate('ViewQuiz')} >
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
