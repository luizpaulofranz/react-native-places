import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

// import local image
// import placeImage from './src/assets/beautiful-place.jpg'

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          { 
            key: Math.random(), 
            name: placeName,
            image: {
              uri: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/09/shutterstock_351622814.jpg'
            }
          })
      };
    });
  };
  /* delete item from state */
  deletePlaceHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalCloseHandler = () => {
    this.setState({selectedPlace: null});
  }

  selectPlaceHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key == key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} deleteItem={this.deletePlaceHandler} modalClose={this.modalCloseHandler} />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.state.places} 
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