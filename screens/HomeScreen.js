import { ScrollView, Text, View, StyleSheet,Switch, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { useState } from 'react';


const FeaturedItem = (props) => {
    const { item } = props;

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

    
        return (
            <Card containerStyle={{ padding: 0 }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'red',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                <Text style={{ margin: 20 }}>{item.calories}</Text>
            </Card>
        );
    
};

// for picking ingredients
const IngredientPicker = () => {
    const [hikeIn, setHikeIn] = useState(false);
    const [campers, setCampers] = useState(false);

    const ingredientArrayCheckIfTrue = [hikeIn,campers];

    const handleReservation = () => {
        console.log('hikeIn: ', hikeIn);
        console.log('campers: ', campers);

        const checked = () => {
            filter.ingredientArrayCheckIfTrue(name=>name.value)
        }
        console.log('checked: ', checked);
        console.log('array: ', ingredientArrayCheckIfTrue);
    }

    return (
        <ScrollView>

            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Potato</Text>
                <Switch style={styles.formItem} value={hikeIn} trackColor={{ true: '#5637DD', false: null }} onValueChange={(value) => setHikeIn(value)} />
                <Text style={styles.formLabel}>cheese</Text>
                <Switch style={styles.formItem} value={campers} trackColor={{ true: '#5637DD', false: null }} onValueChange={(value) => setCampers(value)} />
                
            </View>

            <View style={styles.formRow}>
                <Button
                    onPress={() => handleReservation()} title='Search Availability' color='#5637DD' accessibilityLabel='Tap me to search for available campsites'
                />
            </View>
        </ScrollView>
    )
}

const HomeScreen = () => {
    const campsites = useSelector((state) => state.campsites);
    const recipe = useSelector((state) => state.recipes);


    const recipesAll = recipe;
    console.log('recipeall', recipesAll)

    const featCampsite = campsites.campsitesArray.find((item) => item.featured);
    console.log('featCampsite', featCampsite)


    return (
        <ScrollView style={styles.commentsTitle}>
            <IngredientPicker/>
            <FeaturedItem item={featCampsite} isLoading={campsites.isLoading} errMess={campsites.errMess} />
            <RecipeOut item={recipesAll} />

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