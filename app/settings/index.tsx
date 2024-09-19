import Button from "@/components/Button";
import { View } from "react-native";

export default function Settings() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button href="/settings/123" label="123" />
        <Button href="/settings/abc" label="abc" />
      </View>
    </>
  );
}
