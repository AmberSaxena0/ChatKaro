import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/Images/download.png";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomeButton/CustomButton";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Signin or Signup");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password?");
  };

  // Login With Other Plateform
  const onSignInFacebook = () => {
    console.warn("Facebook Login");
  };
  const onSignInGoogle = () => {
    console.warn("Google Login");
  };
  const onSignInApple = () => {
    console.warn("Apple Login");
  };
  const onSignUpPressed = () => {
    console.warn("Create Account");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logoo, { height: height * 0.5, marginVertical: 25 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="UserName"
          value={username}
          setvalue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setvalue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        {/* Login With Other Plateform  */}

        <CustomButton
          text="Signin with Facebook"
          onPress={onSignInFacebook}
          bgcolor="#E7EAF4"
          fgcolor="#4765A9"
        />
        <CustomButton
          text="Signin with Google"
          onPress={onSignInGoogle}
          bgcolor="#FAE9EA"
          fgcolor="#DD4D44"
        />
        <CustomButton
          text="Signin with Apple"
          onPress={onSignInApple}
          bgcolor="#E3E3E3"
          fgcolor="#363636"
        />
        <CustomButton
          text="Don't have account? Create One"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logoo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});
export default SignInScreen;
