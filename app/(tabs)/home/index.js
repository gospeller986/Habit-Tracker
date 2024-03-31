import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal, {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const index = () => {
  const todos = [];
  const [isModalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("All")
  const suggestions = [
    {
      id: "0",
      todo: "Drink Water, keep healthy",
    },
    {
      id: "1",
      todo: "Go Excercising",
    },
    {
      id: "2",
      todo: "Go to bed early",
    },
    {
      id: "3",
      todo: "Take pill reminder",
    },
    {
      id: "4",
      todo: "Go Shopping",
    },
    {
      id: "5",
      todo: "finish assignments",
    },
  ];

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
        <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
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
              <TouchableOpacity
                onPress={() => setModalVisible(!isModalVisible)}
                style={{ marginTop: 15 }}
              >
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

      <BottomModal
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        onHardwareBackPress={() => setModalVisible(!isModalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Add a todo" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={isModalVisible}
        onTouchOutside={() => setModalVisible(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 300 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TextInput
              value={todo}
              onChangeText={(text) => setTodo(text)}
              placeholder="Input a new task here "
              style={{
                padding: 10,
                borderColor: "#B0B0B0",
                borderWidth: 1,
                borderRadius: 5,
                zIndex: 2,
                backgroundColor: "#d8e4f9",
                width: "90%",
              }}
            />
            <MaterialCommunityIcons name="send" size={34} color="#07bcef" />
          </View>

          <Text style={{ marginLeft: 5, marginTop: 5, fontWeight: "600" }}>
            Choose Categories
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginVertical: 10,
            }}
          >
            <Pressable 
              
              onPress={()=> setCategory("Work") }
              style={{
                borderColor: "#E0E0E0",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderWidth: 3,
                borderRadius: 25,
              }}
            >
              <Text>Work</Text>
            </Pressable>
            <Pressable
              onPress={()=> setCategory("Personal") }
              style={{
                borderColor: "#E0E0E0",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderWidth: 1,
                borderRadius: 25,
              }}
            >
              <Text>Personal</Text>
            </Pressable>
            <Pressable
              onPress={()=> setCategory("Wishlist") }
              style={{
                borderColor: "#E0E0E0",
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderWidth: 1,
                borderRadius: 25,
              }}
            >
              <Text>WishList</Text>
            </Pressable>
          </View>
          <Text style={{ marginLeft: 5, marginTop: 5, fontWeight: "600" }}>
            Some Suggestions
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              marginVertical: 10,
            }}
          >
            {suggestions?.map((item, index) => (
              <Pressable
                style={{
                  backgroundColor: "#F0F8FF",
                  paddingVertical: 4,
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: "#E0E0E0",
                  paddingHorizontal : 2 
                }}
                key={index}
              >
                <Text style={{ textAlign: "center" }}>{item?.todo}</Text>
              </Pressable>
            ))}
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
