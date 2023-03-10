import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl'

const RenderCampsite = (props) => {
    const { campsite } = props;
    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={ campsite.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 30
                            }}
                        >
                            {campsite.name}
                            
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{`Time: ${campsite.time}    Calories: ${campsite.calories}    Difficulty: ${campsite.level}`}</Text>
                <Text
                            style={{
                                color: 'black',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {campsite.recipeOut}
                            
                        </Text>
                <Icon
                    name={props.isFavorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() =>
                        props.isFavorite
                            ? console.log('Already set as a favorite')
                            : props.markFavorite()
                    }
                />
            </Card>
        );
    }
    return <View />;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    }
});

export default RenderCampsite;