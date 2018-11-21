import { AsyncStorage } from 'react-native';

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards:decks';

export function setDummyData() {
  const data = {
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

  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
}

export function getDecks(){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((data)=> (results = JSON.parse(data)))
}

export function getDeck(id){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((data) => (results = JSON.parse(data)))
    .then((parsed) => (deck = parsed[id]))
}

export function saveDeckName(name){
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [name]: {
      id: name,
      title: name,
      questions: []
    }
  }));
}

export function addCardToDeck(question, answer, deck){
  const questions = deck['questions'];
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deck]: {questions: [questions, { question: question, answer: answer}]}
  }));
}
