import { FlatList, StyleSheet, Text, View } from "react-native";
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

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Profile = () => {
  const getNews = async (): Promise<newsApiResponse> => {
    const result = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a369c7c7aacb4f92a125378645453c98"
    );
    return result.json();
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getNews,
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.articles}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
