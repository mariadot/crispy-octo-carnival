import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import Button from './Button';

export default class Card extends React.Component {
  state = {
    questionFacing: false,
    answered: false
  }

  componentDidUpdate(prevProps){
    if(this.props.index !== prevProps.index){
      this.flipCard();
    }
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);

    this.value = 0;

    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })

    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCard = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  onFlip = () => {
    this.flipCard();
    this.setState((prevState)=>({
      questionFacing: !prevState.questionFacing
    }))
  }

  onUserAnswer(answer){
    this.props.onGuessAnswer(answer);
    this.setState((prevState)=>({
      answered: true,
      questionFacing: !prevState.questionFacing
    }))
  }

  render() {
    const answer = this.props.card ? this.props.card.answer : '';
    const question = this.props.card ? this.props.card.question: '';

    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate }
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateX: this.backInterpolate }
      ]
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.onFlip()}>
          <View>
            <Animated.View style={[frontAnimatedStyle, styles.card]}>
              <Text>{question}</Text>
            </Animated.View>
            <Animated.View style={[backAnimatedStyle, styles.card, styles.flipCardBack]}>
              <Text>{answer}</Text>
            </Animated.View>
          </View>
        </TouchableOpacity>
        { this.state.questionFacing && <View> 
          <Text>Was your guess correct?</Text>
          <Button text={'yes'} onPress={()=> this.onUserAnswer('yes')} />
          <Button text={'no'} onPress={()=> this.onUserAnswer('no')} />
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      backgroundColor: 'blue',
      width: 200,
      height: 300,
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden'
    },

    flipCardBack: {
      backgroundColor: 'lightpink',
      position: 'absolute',
      top: 0
    }
});
