import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

function RecipeDetails({navigation, route}) {
  const {recipe} = route.params || {};

  useEffect(() => {
      Speech.speak(recipe.name);
    }, []);

    const goHome = () => {
      navigation.navigate('Home');
    }

    const speakSteps = () => {
      Speech.speak(recipe.steps);
    };

    return (
        <View style={styles.container}>
          <h1>{recipe.name}</h1>
          <Text>{recipe.steps}</Text>
          <View style={styles.buttonContainer}>
            <Button title='Go home' onPress={goHome}></Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Read steps out loud' onPress={speakSteps}></Button>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonContainer: {
    marginBottom: 16,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    alignItems: 'center',
  }
});

export default RecipeDetails;