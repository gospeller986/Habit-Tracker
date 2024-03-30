import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const index = () => {
  const todos = [];

  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            minWidth: 70,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            minWidth: 70,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#7CB9E8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            minWidth: 70,
            marginRight: "auto",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="plus-circle"
            size={38}
            color="#007FFF"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ padding: 10 }}>
          {todos?.length > 0 ? (
            <View></View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 130,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: "contain" }}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/2387/2387679.png",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  fontWeight: "600",
                  fontSize: 18,
                }}
              >
                No Tasks for today ! Add a task{" "}
              </Text>
              <TouchableOpacity style= {{marginTop : 15 }}>
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={38}
                  color="#007FFF"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
