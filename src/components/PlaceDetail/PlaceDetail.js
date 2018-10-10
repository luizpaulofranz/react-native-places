import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
    let content = null;
    if (props.selectedPlace) {
        content = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.image} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
    <Modal 
        visible={props.selectedPlace !== null} 
        animationType="slide"
        onRequestClose={props.modalClose}
    >
        <View style={styles.modalContainer}>
            {content}
            <View>
                <Button title="Delete" color="red" onPress={props.deleteItem} />
                <Button title="Close" onPress={props.modalClose} />
            </View>
        </View>
    </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    image: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

export default placeDetail;