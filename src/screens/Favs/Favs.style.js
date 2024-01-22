import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
  },

  flatList: {
    marginTop: 15,
  },

  recipeItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  recipeInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  recipeTitle: {
    fontSize: 18,
    fontFamily: "RalewayBold",
  },
  recipeDescription: {
    fontSize: 15,
    fontFamily: "Raleway",
    color: colors.text,
    marginTop: 10,
  },

  textContainer: {
    marginTop: 50,
    padding: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontFamily: "RalewayBold",
    color: colors.text,
  },

  noReceta: {
    fontSize: 18,
    fontFamily: "RalewayBold",
    color: colors.text,
    marginTop: 50,
    padding: 5,
    alignItems: "center",
    marginHorizontal: 20,
  }
});
