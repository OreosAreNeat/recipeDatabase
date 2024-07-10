import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddRecipe from './components/addRecipe';
import RecipeDetails from './components/recipeDetails';
import Home from './components/home';

const Stack = createNativeStackNavigator();

function Recipe({navigation}) {
  const [theState, setTheState] = useState('');

  useEffect(() => {
      
    }, []);


    return (
        <View>
          <NavigationContainer>
              <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen name='Add'>
                      {props => <AddRecipe {...props} theState={theState} setTheState={setTheState} />}
                  </Stack.Screen>
                  <Stack.Screen name='Details'>
                      {props => <RecipeDetails {...props} theState={theState} setTheState={setTheState} />}
                  </Stack.Screen>
                  <Stack.Screen name='Home'>
                      {props => <Home {...props} theState={theState} setTheState={setTheState} />}
                  </Stack.Screen>
              </Stack.Navigator>
          </NavigationContainer>
        </View>
    );
}


export default Recipe;