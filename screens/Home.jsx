import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Homeheader from "../components/Home/Homeheader";
import ProductCard from "../components/Home/productCard";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 12, gap: 20 }}>
        <Homeheader />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Text style={{ fontSize: 24, letterSpacing: 4, marginBottom: 10 }}>
            Our Story
          </Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <View
              style={{
                backgroundColor: "#E0E0E0",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <Ionicons name={"apps-outline"} size={26} />
            </View>
            <View
              style={{
                backgroundColor: "#E0E0E0",
                padding: 8,
                borderRadius: 50,
              }}
            >
              <Ionicons name={"albums-outline"} size={26} />
            </View>
          </View>
        </View>

        <ProductCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
