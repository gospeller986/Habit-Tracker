import {
  Alert,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";


const register = () => { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  const handleRegister = () => { 

    const user = {
      name: name,
      email: email,
      password: password,
    } 

    axios.post("http://10.0.2.2:3000/register",user ).then((response) => {
      console.log(response);
      Alert.alert("Registration successful" ,  "You have been registered successfully")
      setName("")
      setEmail("")
      setPassword("") 
    }).catch((error)=> {
        console.log(error);
        Alert.alert("Registration failed" ,  "Please try again")
    })

  }
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 40 }}>
        <Image
          style={{ width: 180, height: 180, resizeMode: "contain" }}
          source={{
            uri: "https://img.freepik.com/premium-vector/habit-tracker-lettering-modern-hand-written-text-sticker-planner-bright-habit-tracker-text-planning-concept-vector-illustration_565728-508.jpg",
          }}
        />
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "700", marginTop: 5 }}>
            Register your Account{" "}
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
              marginBottom : 20,
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10 }}
              name="user"
              size={24}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="Enter your name"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 10 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="Enter your email"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <FontAwesome
              style={{ marginLeft: 10 }}
              name="lock"
              size={24}
              color="gray"
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 17 : 17,
              }}
              placeholder="Enter your password"
            />
          </View>

          <View style={{ marginTop: 40 }} />

          <TouchableOpacity 
            onPress ={handleRegister}
            style={{
              backgroundColor: "#8a8cfe",
              paddingVertical: 15,
              marginHorizontal: 40,
              borderRadius: 10,
              elevation: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/login")}
            style={{ marginTop: 30 }}
          >
            <Text style={{ textAlign: "center" }}>
              Already have an account? Login{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({});
