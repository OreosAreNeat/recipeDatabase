import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddRecipe({navigation}) {
  const [steps, setSteps] = useState('');
  const [name, setName] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      getRecipes('Recipes');
    }, []);

    const getRecipes = async (key) => {
      const theRecipesString = await AsyncStorage.getItem(key);
      if(theRecipesString != null){
        const theRecipes = JSON.parse(theRecipesString);
        setRecipes(theRecipes);
      }
    }

    const addTheRecipe = async () => {
      const recipe = {name, steps};
      const allRecipes = [...recipes, recipe];
      storeRecipes('Recipes', allRecipes);
      navigation.navigate('Home');
    }

    const storeRecipes = async (key, value) => {
      const valueString = JSON.stringify(value);
      await AsyncStorage.setItem(key, valueString);
    }
    
    const goBack = () => {
      navigation.navigate('Home');
    }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter Recipe Name" value={name} onChangeText={setName} 
      multiline={true} style={styles.input}></TextInput>
      <TextInput placeholder="Enter Recipe Steps" value={steps} onChangeText={setSteps}
        multiline={true} style={[styles.input, styles.textArea]}></TextInput>
      <View style={styles.buttonContainer}>
        <Button title="Add Recipe" onPress={addTheRecipe}></Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back Home" onPress={goBack}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    minHeight: 40,
  },
  textArea: {
    minHeight: 100
  },
  buttonContainer: {
    marginBottom: 16,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    alignItems: 'center',
  }
});

export default AddRecipe;
