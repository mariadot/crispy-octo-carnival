import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class DeckInfo extends React.Component {
  render() {
    return (
      <View style={styles.info}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DeckView')}>
          <Text>Deck info</Text>
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