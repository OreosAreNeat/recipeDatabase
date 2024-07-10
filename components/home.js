import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Recipe({navigation}) {
  const [recipes, setRecipes] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      getRecipes('Recipes');
    }, [])
  );

    const getRecipes = async (key) => {
      const theRecipesString = await AsyncStorage.getItem(key);
      if(theRecipesString != null){
        const theRecipes = JSON.parse(theRecipesString);
        setRecipes(theRecipes);
      }
    }


    return (
        <View>
          <Button title='Add Recipe' onPress={() => navigation.navigate('Add')}/>
          <FlatList
            data={recipes}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details', {recipe: item})}>
                <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
    );
}


export default Recipe;