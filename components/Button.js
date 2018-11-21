import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={{color: 'white'}}>{props.text}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5
      }
});

export default Button;