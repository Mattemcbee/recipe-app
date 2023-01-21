import { FlatList, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';


const DirectoryScreen = ({ navigation }) => {
    const campsites=useSelector((state)=>state.campsites)

    if (campsites.isLoading) {
        return (

            <ScrollView>
                <Mission />
                <Card wrapperStyle={{ margin: 20 }}>
                    <Card.Title>Community Partners</Card.Title>
                    <Card.Divider />
                    <Loading />
                </Card>
            </ScrollView>
        )
    }
    if (campsites.errMess) {
        return (
            <ScrollView>
                <Mission />
                <Card wrapperStyle={{ margin: 20 }}>
                    <Card.Title>Community Partners</Card.Title>
                    <Card.Divider />
                    <Text>{campsites.errMess}</Text>
                </Card>
            </ScrollView>
        )
    }

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile
                title={campsite.name}
                caption={campsite.description}
                featured
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
                imageSrc={{uri: baseUrl + campsite.image }}
            />
        );
    };
    return (
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;