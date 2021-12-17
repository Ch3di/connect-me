import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CutomListItem";
import { auth } from "../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import CutomListItem from "../components/CutomListItem";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
    return unsubscribe;
  }, []);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

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
            <TouchableOpacity activeOpacity={0.5} onPress={signOutUser}>
              <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View style={{}}>
            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camera" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("AddChat")}
            >
              <SimpleLineIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )
      }
    });
  }, []);

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName
    });
  };
  return (
    <SafeArray>
      <ScrollView style={styles.container}>
        {chats.map(({ id, data: { chatName } }) => (
          <CutomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
        <CustomListItem />
      </ScrollView>
    </SafeArray>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
});
