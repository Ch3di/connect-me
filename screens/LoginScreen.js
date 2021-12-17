import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  const register = () => {
    navigation.navigate("Register");
    console.log("register");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "../images/connect-logo.png"
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={register}
        type="outline"
        title="Register"
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  inputContainer: {
    width: 300
  },
  button: {
    marginTop: 10,
    width: 200
  }
});

export default LoginScreen;
