import React from 'react';
import { StyleSheet, View } from 'react-native';
import DeckList from './components/DeckList';
import DeckView from './components/DeckView';
import DeckAdd from './components/DeckAdd';
import CardAdd from './components/CardAdd';
import DeckQuiz from './components/DeckQuiz';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { setDummyData } from './utils/api';
import { Entypo } from '@expo/vector-icons';

export default class App extends React.Component {
  componentDidMount(){
    setDummyData();
  }

  render() {
    return (
        <View style={styles.container} >
          <MainNavigation />
        </View>
    );
  }
}

const TabNav = TabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      title: 'Home',
      tabBarIcon: <Entypo name='grid' size={30} color={'#084c61'}/>
    }
  }, 
  AddDeck: {
    screen: DeckAdd,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      title: 'Add Deck',
      tabBarIcon: <Entypo name='add-to-list' size={30} color={'#084c61'}/>
    }
  }
});

const MainNavigation = StackNavigator({
  Home: {
    screen: TabNav,
  },
  ViewDeck: {
    screen: DeckView
  },
  AddCard: {
    screen: CardAdd,
    navigationOptions: {
      title: 'Add Card'
    }
  },
  ViewQuiz: {
    screen: DeckQuiz,
    navigationOptions: {
      title: 'Deck Quiz'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
