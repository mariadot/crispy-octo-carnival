import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import { TabNavigator, StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
        <MainNavigation />
    );
  }
}

const TabNav = TabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  }, 
  AddDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    }
  }
});

const MainNavigation = StackNavigator({
  Home: {
    screen: TabNav,
  },
  DeckView: {
    screen: DeckView
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
