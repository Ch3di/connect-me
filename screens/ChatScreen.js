import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";

function ChatScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Avatar rounded source={{ uri: "" }} />
          <Text>{route.params.chatName}</Text>
        </View>
      )
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>{route.params.chatName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ChatScreen;
