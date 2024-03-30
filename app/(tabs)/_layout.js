import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs  >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7CB9E8"  , padding : 5 , height : 30 , fontWeight : "bold"},
          headerShown: false,
          tabBarStyle : {
            backgroundColor : "#d8e4f9",
            borderRadius : 20 ,    
            bottom : 15 ,
            padding : 5 ,
            height : 80 ,
            shadowRadius : 40 ,
            shadowOffset : 20,
            justifyContent : "center",
            alignItems : "center",
            marginHorizontal : 20 
          } ,
          tabBarIcon : ({focused}) =>
          focused ? (
              <FontAwesome name="tasks" size={24} color="#7CB9E8" />
          ): (
            <FontAwesome name="tasks" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "Calendar",
          tabBarLabelStyle: { color: "#7CB9E8"  , padding : 5 , height : 30 , fontWeight : "bold"},
          headerShown: false,
          tabBarStyle : {
            backgroundColor : "#d8e4f9",
            borderRadius : 20 ,    
            bottom : 15 ,
            padding : 5 ,
            height : 80 ,
            shadowRadius : 40 ,
            shadowOffset : 20,
            justifyContent : "center",
            alignItems : "center",
            marginHorizontal : 20 
          } ,
          tabBarIcon : ({focused}) =>
          focused ? (
            <AntDesign name="calendar" size={24} color="#7CB9E8" />
          ): (
            <AntDesign name="calendar" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#7CB9E8"  , padding : 5 , height : 30 , fontWeight : "bold"},
          headerShown: false,
          tabBarStyle : {
            backgroundColor : "#d8e4f9",
            borderRadius : 20 ,    
            bottom : 15 ,
            padding : 5 ,
            height : 80 ,
            shadowRadius : 40 ,
            shadowOffset : 20,
            justifyContent : "center",
            alignItems : "center",
            marginHorizontal : 20 
          } ,
          tabBarIcon : ({focused}) =>
          focused ? (
            <MaterialCommunityIcons name="account-details" size={24} color="#7CB9E8" />
          ): (
            <MaterialCommunityIcons name="account-details" size={24} color="black" />
          )
        }}
      />
    </Tabs>
  );
}
