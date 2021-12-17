import { StatusBar } from "expo-status-bar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useLayoutEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";

function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login"
    });
  }, [navigation]);

  const register = () => {
    alert(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50, textAlign: "center" }}>
        Create a Connect-ME account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full name"
          autoFocus
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Default Picture Url"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <View style={styles.button}>
        <Button raised title="Register" onPress={register} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white"
  },
  inputContainer: {
    width: 300
  },
  button: {
    marginTop: 20,
    width: 300
  }
});

export default RegisterScreen;
