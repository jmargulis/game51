import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Game Examples"  }} />
      <Stack.Screen name="map/index" options={{ title: "Map" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings Overview" }} />
      <Stack.Screen name="settings/[id]" options={{ title: "Settings" }} />
    </Stack>
  );
}
