import { ScrollView, Text, View, StyleSheet, Switch, Button, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { useState } from 'react';
import { RECIPES } from '../shared/RECIPES';
import { useNavigation } from '@react-navigation/native';



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

    // console.log(navigation, 'nav home')

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
                        onPress={() =>
                            navigation.navigate('RecipeInfo', { item })
                        }

                    >
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text
                                style={{
                                    color: 'red',
                                    textAlign: 'center',
                                    fontSize: 50
                                }}
                            >
                                {item.name}
                            </Text>
                        </View>
                        <Text style={{ margin: 20 }}>{item.calories}</Text>
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
const IngredientPicker = () => {
    const [Potato, setPotato] = useState({ name: 'Potato', value: false });
    const [Cheese, setCheese] = useState({ name: 'Cheese', value: false });
    const [checked, setChecked] = useState([]);

    //array to store consts
    const ingredientArrayCheckIfTrue = [Potato, Cheese];

    const handleReservation = () => {
        // console.log('Potato: ', Potato);
        // console.log('Cheese: ', Cheese);

        //stores all ingredients marked true
        const checked = ingredientArrayCheckIfTrue.filter(value => value.value);

        console.log('checked: ', checked);

        //array of just the names to be used to check the recipes
        const checkedNames = ingredientArrayCheckIfTrue.filter(value => value.value).map(obj => obj.name)
        console.log('checkedName: ', checkedNames);

        // console.log('array: ', ingredientArrayCheckIfTrue);
    }

    return (
        <ScrollView>

            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Potato</Text>
                <Switch style={styles.formItem} value={Potato} trackColor={{ true: '#5637DD', false: null }} onValueChange={(heck) => setPotato({ name: 'Potato', value: heck })} />
                <Text style={styles.formLabel}>Cheese</Text>
                <Switch style={styles.formItem} value={Cheese} trackColor={{ true: '#5637DD', false: null }} onValueChange={(heck) => setCheese({ name: 'Cheese', value: heck })} />
            </View>

            <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()} title='Check for recipes' color='white' accessibilityLabel='Tap me to search for available campsites'
                />
            </View>
        </ScrollView>
    )
}

const HomeScreen = () => {

    // const recipesAll = RECIPES; //filter
    const recipesAll2 = RECIPES.find((item) => item.featured); //filter

    // console.log(recipesAll2, 'recipe all 2')

    //where the checked ingredients need to come
    const ingTest = ['cheese'];

    // console.log(ingTest, ' ing');

    const filteredIngMaybe = RECIPES.filter(names => JSON.stringify(names.ingredients) === JSON.stringify(ingTest))
    // .includes(ingTest)

    console.log(filteredIngMaybe,'this checks for if ingredeint is in recipe')



    return (
        <ScrollView style={styles.commentsTitle}>
            <IngredientPicker />
            <RecipeOut item={recipesAll2}
            />

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: 'center',
        backgroundColor: '#43484D',
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