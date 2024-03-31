import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  useEffect(() => {
           const checkLoginStatus = async () => {
               try {
                   const token = await AsyncStorage.getItem("authToken") 
                   if(token){
                       router.replace("/(tabs)/home", )
                   }
               } catch (error) {
                 console.log(error);
               }
           }

           checkLoginStatus()
     
  },[])

  const handleLogin = () => {
      const user = {
        email: email,
        password: password,
      }

      axios.post("http://10.0.2.2:3000/login", user).then((response) => {
            const token = response.data.token;
            AsyncStorage.setItem("authToken", token);
            router.replace("/(tabs)/home", )
      });
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
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "700", marginTop: 5 }}>
            Log in to your account{" "}
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
              justifyContent: "space-between",
            }}
          >
            <Text>Keep me logged in</Text>
            <Text style={{ color: "#007FFF" }}>Forgot Password ?</Text>
          </View>

          <View style={{ marginTop: 40 }} />

          <TouchableOpacity 
            onPress={handleLogin}
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
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/register")}
            style={{ marginTop: 30 }}
          >
            <Text style={{ textAlign: "center" }}>
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
