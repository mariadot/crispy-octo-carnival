import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckInfo  from './DeckInfo';
import { getDecks } from '../utils/api';

export default class DeckList extends React.Component {
  state = {
    decks: {}
  }

  componentDidMount() {
    getDecks()
      .then(
        (decks) => {
          this.setState(()=>({
          decks
        }))
      }
      );
  }

  render() {
    const { decks } = this.state;
    return (
      <View style={styles.list}>
        <Text>Decks</Text>
        {
          Object.keys(decks).map((key)=> {
            return (
              <DeckInfo key={decks[key].id} deck={decks[key]} navigation={this.props.navigation} />
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  },
});