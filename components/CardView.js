import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from './Button';

export default class CardView extends React.Component {
  render() {
    const answer = this.props.card ? this.props.card.answer : '';
    const question = this.props.card ? this.props.card.question: ''; 

    return (
      <View style={styles.card}>
          <Text>{answer}</Text>
          <Text>Was your guess correct?</Text>
          <Button text={'yes'} onPress={()=> console.log('yes')}/>
          <Button text={'no'} onPress={()=> console.log('no')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'lightpink',
      flex: 1,
      padding: 10,
      marginBottom: 5
    },
});