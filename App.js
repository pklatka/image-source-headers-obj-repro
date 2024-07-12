import { StyleSheet, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "http://localhost:3000/image",
          headers: {
            'test-header': 'test'
          }
        }}
        style={{
          width: 300,
          height: 300,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
