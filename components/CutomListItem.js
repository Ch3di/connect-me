import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

function CutomListItem({ id, chatName, enterChat }) {
  return (
    <ListItem key={id} bottomDivider onPress={() => enterChat(id, chatName)}>
      <Avatar
        rounded
        source={{ uri: chatMessages?.[0]?.photoUrl || "" }}
      ></Avatar>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 800 }}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          ABC
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default CutomListItem;
