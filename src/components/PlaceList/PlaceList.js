import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    /*renderItem receives a JSX and it iterates through "data" property values*/
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                    placeName={info.item.value} 
                    onItemPressed={() => props.deleteItem(info.item.key)} />
            )}>
        </FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;