import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CutomListItem";
import { auth } from "../firebase";

const HomeScreen = () => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Connect-ME",
      headerStyle: {
        backgroundColor: "#fff",
        headerTitleStyle: {
          color: "black"
        },
        headerTintColor: "black",
        headerLeft: () => (
          <View style={{ marginLeft: 20 }}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </View>
        )
      }
    });
    return () => {
      cleanup;
    };
  }, [input]);
  return (
    <SafeArray>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeArray>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
