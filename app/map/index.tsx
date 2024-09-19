import { useLocalSearchParams } from "expo-router";
import { Dimensions } from "react-native";
import MapView from 'react-native-maps';

export default function Map() {
  const { lat, long } = useLocalSearchParams<{ lat?: string, long?: string }>();
  const latitude = lat ? Number(lat) : 38.40210;
  const longitude = long ? Number(long) : -122.82390;

  return (
    <MapView
      provider="google"
      style={{
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
      }}
      initialRegion={{
        // coordinates for Sebastopol
        // from https://www.google.com/search?q=sebastopol+california+latitude+and+longitude+coordinates
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}
