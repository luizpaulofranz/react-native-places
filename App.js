import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

// import local image
// import placeImage from './src/assets/beautiful-place.jpg'

class App extends Component {

  placeAddedHandler = placeName => {
    // using redux properties
    this.props.addPlace(placeName);
  };

  deletePlaceHandler = () => {
    this.props.deletePlace();
  }

  modalCloseHandler = () => {
    this.props.deselectPlace();
  }

  // sets a state property, which opens modal
  selectPlaceHandler = key => {
    this.props.selectPlace(key);
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} deleteItem={this.deletePlaceHandler} modalClose={this.modalCloseHandler} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.props.places} 
          selectItem={this.selectPlaceHandler} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlace: (placeName) => dispatch(addPlace(placeName)),
    deletePlace: () => dispatch(deletePlace()),
    selectPlace: (key) => dispatch(selectPlace(key)),
    deselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);