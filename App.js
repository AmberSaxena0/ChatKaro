import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInScreen from "./components/screen/SignInScreen/SignInScreen";

const App = () => {
  return (
    <SafeAreaView style={style.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: "#fff",
  },
});
export default App;
