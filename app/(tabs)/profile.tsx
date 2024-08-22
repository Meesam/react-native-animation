import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";

interface article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}
interface newsApiResponse {
  status: string;
  totalResults: number;
  articles: article[];
}

type ItemProps = { title: string; urlToImage: string | null };

const Item = ({ title, urlToImage }: ItemProps) => (
  <View style={styles.itemContainer}>
    <Image
      source={{
        uri: urlToImage
          ? urlToImage
          : "https://unsplash.com/photos/lemon-water-in-footed-glass-RgplfXbxLFs",
      }}
      style={styles.itemImage}
    />
    <View style={styles.itemText}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const Profile = () => {
  const getNews = async (): Promise<newsApiResponse> => {
    const result = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=a369c7c7aacb4f92a125378645453c98"
    );
    return result.json();
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["all-news-1"],
    queryFn: getNews,
  });

  return (
    <View style={styles.container}>
      {isPending && <Text>Loading...</Text>}
      {isError && <Text>error</Text>}
      <FlatList
        data={data?.articles}
        renderItem={({ item }) => (
          <Item title={item.title} urlToImage={item.urlToImage} />
        )}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: "#FFF",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    elevation: 5,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  itemText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  newsContainer: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
  },
});
