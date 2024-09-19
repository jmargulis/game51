import { Stack } from "expo-router";
import Button from "@/components/Button";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Game Examples" }} />
      </Stack>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize: 40}}>Welcome to this "game" app.</Text>
        <Button href="/map" label="Map of Sebastopol" />
        <Button href="/map?lat=42.361145&long=-71.057083" label="Map of Boston" />
        <Button href="/tic-tac-toe" label="Tic Tac Toe" />
        <Button href="/settings" label="Change Settings" />
      </View>
    </>
  );
}
