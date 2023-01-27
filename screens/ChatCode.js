// import React, { useState } from 'react';
// import { View, Text, ScrollView, FlatList } from 'react-native';
// import { useFetch } from './api';

// function Ingredients({ navigation }) {
//   const [ingredients, setIngredients] = useState([]);
//   const { data: allIngredients } = useFetch('/ingredients');

//   function handleSelectIngredient(ingredient) {
//     setIngredients([...ingredients, ingredient]);
//   }

//   function handleRemoveIngredient(ingredient) {
//     setIngredients(ingredients.filter((i) => i !== ingredient));
//   }

//   return (
//     <View>
//       <Text>Ingredients</Text>
//       <FlatList
//         data={allIngredients}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.name}</Text>
//             <Button title="+" onPress={() => handleSelectIngredient(item)} />
//             <Button title="-" onPress={() => handleRemoveIngredient(item)} />
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//       <Button
//         title="See Recipes"
//         onPress={() => navigation.navigate('Recipes', { ingredients })}
//       />
//     </View>
//   );
// }

// function Recipes({ navigation, route }) {
//   const { ingredients } = route.params;
//   const { data: allRecipes } = useFetch('/recipes');
//   const filteredRecipes = allRecipes.filter((recipe) => {
//     return recipe.ingredients.some((ingredient) =>
//       ingredients.includes(ingredient)
//     );
//   });

//   return (
//     <View>
//       <Text>Recipes</Text>
//       <FlatList
//         data={filteredRecipes}
//         renderItem={({ item }) => <Text>{item.name}</Text>}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }