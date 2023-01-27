import { FlatList, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';
import { RECIPES } from '../shared/RECIPES';


const DirectoryScreen = ({ navigation }) => {   

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <Tile
                title={campsite.name}
                caption={campsite.calories}
                featured
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
                // imageSrc={{uri: baseUrl + campsite.image }}
            />
        );
    };

    return (
        <FlatList
            data={RECIPES}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;