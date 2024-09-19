import { Link, Href } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  href?: Href<string>;
  onPress?: () => void;
  label: string;
}

const Button = ({href, onPress, label}: Props) => {
  if (href) {
    return (
      <Link href={href} asChild>
        <Pressable
          style={{
            minHeight: 50,
            width: "80%",
            backgroundColor: "#333333",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >{label}</Text>
        </Pressable>
      </Link>
    );
  } else if (onPress) {
    return (<View><Pressable
    style={{
      minHeight: 50,
      width: "80%",
      backgroundColor: "#333333",
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 20,
    }}
    onPress={onPress}
  >
    <Text
      style={{
        fontSize: 20,
        color: "#FFFFFF",
      }}
    >{label}</Text>
  </Pressable></View>);
  }
}

export default Button