import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import Homeheader from "../../components/Home/Homeheader";
import { useLocalSearchParams, router } from "expo-router";

const Page = () => {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseUrl = `https://fakestoreapi.com/products/1`;

  console.log(id);
  useEffect(() => {
    fetch(baseUrl)
      .then((respone) => respone.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SafeAreaView>
          <View style={{ paddingHorizontal: 12, gap: 20 }}>
            <Homeheader />

            <View style={{ gap: 10 }}>
              <View style={{ position: "relative" }}>
                <Image
                  source={{ uri: data.image }}
                  style={{
                    width: "100%",
                    height: 250,
                  }}
                />

                <View
                  style={{
                    position: "absolute",
                    color: "black",
                    padding: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Pressable onPress={() => router.back()}>
                    <Ionicons name={"close-outline"} size={26} />
                  </Pressable>
                </View>
              </View>

              <Text style={{ fontSize: 25 }}>{data.title}</Text>
              <Text style={{ fontSize: 18, color: "orange" }}>
                ${data.price}
              </Text>
              <Text style={{ fontSize: 18 }}>{data.description}</Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Page;

const styles = StyleSheet.create({});
