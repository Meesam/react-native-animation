import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  const getNews = async () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a369c7c7aacb4f92a125378645453c98"
    ).then((res: any) => {
      console.log("res ", res);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
