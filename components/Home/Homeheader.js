import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Homeheader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Ionicons name={"menu-outline"} size={26} />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Open</Text>
        <Text>Fashion</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <Ionicons name={"search"} size={26} />
        <Ionicons name={"bag-outline"} size={26} />
      </View>
    </View>
  );
};

export default Homeheader;

const styles = StyleSheet.create({});
