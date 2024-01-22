import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import styles from "./Favs.style";

const Favs = ({ navigation }) => {
  const favoriteRecipes = useSelector((state) => state.favs.favoriteRecipes);

  console.log("recetas favortias", favoriteRecipes);

  return (
    <View>
      {favoriteRecipes === null || favoriteRecipes.length === 0 ? (
        <Text style={styles.noReceta}>No tienes recetas favoritas aún.</Text>

      ) : (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.recipeItem}
              onPress={() => navigation.navigate("Detalle", { recipe: item })}
            >
              <View>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.thumbnail}
                  loading="auto"
                />
              </View>
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeTitle}>{item.title}</Text>
                <Text style={styles.recipeDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Favs;
