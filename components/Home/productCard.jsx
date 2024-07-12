import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import uidata from "../../constants/uidata";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [data, setData] = useState([]);
  const baseUrl = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseUrl)
      .then((respone) => respone.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <FlatList
      data={data}
      scrollEnabled
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          {loading ? (
            <Text>loading</Text>
          ) : (
            <TouchableOpacity
              style={{
                width: "50%",
                marginLeft: 10,
                marginBottom: 10,
                gap: 10,
              }}
              onPress={() => router.push(`/listings/${item.id}`)}
            >
              <View style={{ position: "relative" }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: "100%",
                    aspectRatio: 1,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    borderColor: "black",
                    borderWidth: 3,
                    padding: 8,
                    borderRadius: 50,
                  }}
                >
                  <Ionicons name={"add-outline"} size={26} />
                </View>
              </View>
              <View style={{ padding: 10, gap: 15 }}>
                <Text style={{ fontFamily: "regular", fontSize: 15 }}>
                  {item.title}
                </Text>

                <View style={{ marginTop: "auto" }}>
                  <Text
                    style={{
                      fontFamily: "bold",
                      fontSize: 15,
                      color: "orange",
                    }}
                  >
                    ${item.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        </>
      )}
    />
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
