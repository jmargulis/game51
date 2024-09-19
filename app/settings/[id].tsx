import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SettingsDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 40}}>Settings: {id}</Text>
    </View>
  );
}
