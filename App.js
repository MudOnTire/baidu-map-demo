/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';

const { Marker, Polyline } = Overlay;
const line = [
  { longitude: 116.379835, latitude: 39.968263 },
  { longitude: 116.693739, latitude: 39.796402 }
];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          zoom={18}
          trafficEnabled={true}
          zoomControlsVisible={true}
          center={{
            longitude: 116.379835,
            latitude: 39.968263
          }}
        >
          <Marker
            location={{
              longitude: 116.379835,
              latitude: 39.968263
            }}
          />
          <Marker
            location={{
              longitude: 116.693739,
              latitude: 39.796402
            }}
          />
          <Polyline points={line} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	mapView: {
		width: "100%",
		height: "100%"
	}
});
