import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:decks';

export function setDummyData() {
  const example = {
    React: {
      id: 'React',
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
        id: 'JavaScript',
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
  };

  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(example));
}

export function getDecks(){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((data)=> (results = JSON.parse(data)))
}

export function getDeck(id){
  console.log(id);
}

export function saveDeckName(name){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [name]: name,
  }));
}

export function addCardToDeck(title, card){
  console.log(title, card);
}
