import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

const PlanScreen = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 43.9251,
                    longitude: 2.148,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 43.9251,
                        longitude: 2.148,
                    }}
                    title="Albi"
                    description="Ville du festival"
                />
            </MapView>
        </View>
    );
};

export default PlanScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: width,
        height: height,
    },
});