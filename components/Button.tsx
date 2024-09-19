import { Link, Href } from "expo-router";
import { Pressable, Text } from "react-native";


// import { Text, TouchableOpacity } from "react-native";
// import { Href, useRouter } from "expo-router";

type Props = {
  href: Href<string>;
  label: string;
}

const Button = ({href, label}: Props) => {
  // const router = useRouter()

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



    // <TouchableOpacity
    //   style={{
    //     minHeight: 50,
    //     backgroundColor: "#FF7754",
    //     borderRadius: 16,
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    //   onPress={() => {
    //     router.push(page)
    //   }}
    // >
    //   <Text>{label}</Text>
    // </TouchableOpacity>
  )
}

export default Button