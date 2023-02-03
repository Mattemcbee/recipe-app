import { ScrollView, Text, View, StyleSheet, Switch, Button, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { useState } from 'react';
import { RECIPES } from '../shared/RECIPES';
import { useNavigation } from '@react-navigation/native';
import { toggleFavorite } from '../features/favorites/favoritesSlice';



const FeaturedItem = (props) => {
    const { item } = props;
    // const filteredRecipes = useSelector(
    //     selectFilteredRecipes(props.filteredIngredients)
    //   );

    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        )
    }

    if (item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseUrl + item.image }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
};


const RecipeOut = (props) => {
    const { item } = props;
    const navigation = useNavigation();
    // const { item } = route.params;


    console.log(navigation, 'nav home')

    // console.log(props, 'props')
    if (props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        )
    }

    if (item) {
        {
            // filteredRecipes.map((meal) => {
            return (
                //                 {item.map((item, i) => {
                // return(
                <>
                    <Card containerStyle={{ padding: 0 }}
                        title={item.name}

                        onPress={() =>
                            navigation.navigate('RecipeInfo', { item })
                        }

                    >
                        <Card.Image source={item.image}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 50
                                }}
                            >
                                {item.name}
                            </Text>
                        </Card.Image>



                        <View style={{ justifyContent: 'center', flex: 1 }}>

                            {/* <Icon
                                name={props.isFavorite ? 'heart' : 'heart-o'}
                                type='font-awesome'
                                color='#f50'
                                raised
                                reverse */}
                             {/* onPress={() => */}
                            {/* //     props.isFavorite
                            //         ? console.log('Already set as a favorite')
                            //         : props.markFavorite()
                            // }
                            // /> */}
                        </View>
                        <Text style={{ margin: 20 }}>{`Time: ${item.time}    Calories: ${item.calories}    Difficulty: ${item.level}`}</Text>
                        
                    </Card>
                    {/* <FlatList
                        data={RECIPES}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                        keyExtractor={(item) => item.id.toString()}
                    /> */}
                </>
            );


        }
        // return (
        //     <FlatList
        //         data={RECIPES}
        //         renderItem={renderDirectoryItem}
        //         keyExtractor={(item) => item.id.toString()}
        //     />
        // );
    }
};


// for picking ingredients
const IngredientPicker = (props) => {
    // const Potato='potato';
    const { selectedIngredients, setSelectedIngredients } = props;

    const toggleSelectedIngredients = (newIngredient) => {
        if (selectedIngredients.includes(newIngredient)) {
            setSelectedIngredients(selectedIngredients.filter((ingredient) => ingredient !== newIngredient
            ))
        }
        else {
            const newIngredientList = [...selectedIngredients, newIngredient];
            setSelectedIngredients(newIngredientList);
        }
    }

    //array to store consts
    // const ingredientArrayCheckIfTrue = [Potato, Cheese];

    const handleReservation = () => {
        // console.log('Potato: ', Potato);
        // console.log('Cheese: ', Cheese);

        //stores all ingredients marked true
        // const checked = ingredientArrayCheckIfTrue.filter(value => value.value);

        // console.log('checked: ', checked);

        //array of just the names to be used to check the recipes
        // const checkedNames = ingredientArrayCheckIfTrue.filter(value => value.value).map(obj => obj.name)
        // console.log('checkedName: ', checkedNames);

        // console.log('array: ', ingredientArrayCheckIfTrue);
    }

    return (
        <ScrollView>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Text style={styles.formLabel}>Bagel</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('bagel')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('bagel')} />
                <Text style={styles.formLabel}>Beans</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('beans')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('beans')} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                <Text style={styles.formLabel}>Cheese</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('cheese')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('cheese')} />
                <Text style={styles.formLabel}>Eggs</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('eggs')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('eggs')} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                <Text style={styles.formLabel}>Garlic</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('garlic')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('garlic')} />

                <Text style={styles.formLabel}>Lettuce</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('lettuce')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('lettuce')} />

            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

            <Text style={styles.formLabel}>Noodle</Text>
            <Switch style={styles.formItem} value={selectedIngredients.includes('noodle')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('noodle')} />
            <Text style={styles.formLabel}>Onion</Text>
            <Switch style={styles.formItem} value={selectedIngredients.includes('onion')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('onion')} />
</View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Text style={styles.formLabel}>Salmon</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('salmon')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('salmon')} />

                <Text style={styles.formLabel}>Tomato</Text>
                <Switch style={styles.formItem} value={selectedIngredients.includes('tomato')} trackColor={{ true: '#5637DD', false: null }} onValueChange={() => toggleSelectedIngredients('tomato')} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

            </View>

            {/* <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()} title='Check for recipes' color='white' accessibilityLabel='Tap me to search for available campsites'
                />
            </View> */}
        </ScrollView>
    )
}

const HomeScreen = () => {

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    console.log(selectedIngredients, 'selected ingredients')

    // const recipesAll = RECIPES; 
    const recipesAll2 = RECIPES.find((item) => item.featured); //filter

    // console.log(recipesAll2, 'recipe all 2')

    //where the checked ingredients need to come
    const ingTest = selectedIngredients;

    // console.log(ingTest, ' ing');

    const filteredIngMaybe = RECIPES.filter(names => {
        // console.log('1', JSON.stringify(names.ingredients))
        // console.log('2', JSON.stringify(ingTest))

        // JSON.stringify(names.ingredients) === JSON.stringify(ingTest)

        if (selectedIngredients.length > 0) {
            return selectedIngredients.some((ing) => names.ingredients.includes(ing))
        }
        return false

    })
    // .includes(ingTest)

    // console.log(filteredIngMaybe, 'this checks for if ingredeint is in recipe')


    if (filteredIngMaybe.length > 0) {
        return (
            <ScrollView style={styles.commentsTitle}>
                <IngredientPicker setSelectedIngredients={setSelectedIngredients} selectedIngredients={selectedIngredients} />
                {/* <Text>heck</Text> */}
                {filteredIngMaybe.map((recipe) => <RecipeOut item={recipe} />)}

            </ScrollView>
        );
    }
    else if (filteredIngMaybe == false) {
        return (
            <ScrollView style={styles.commentsTitle}>
                <IngredientPicker setSelectedIngredients={setSelectedIngredients} selectedIngredients={selectedIngredients} />
                <Text>Choose an ingredient to get started</Text>

            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#a1cebe',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    }
});


export default HomeScreen;

// const ingredientFilter = (ingredient) => {
//     if(props.filteredIngredients.length===0){
//       return true;
//     }
    //add logic to check to see if ingedient is in recipe
    //return true if ingredient exists in recipe
    //false if it doesn't
//   }
  //recipes.filter(ingredientFilter).map()