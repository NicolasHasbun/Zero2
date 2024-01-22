import { Image, Text, View, ScrollView } from 'react-native';
import { Header, HeartButton, ShareItem } from '../../components';
import React from 'react';
import styles from './DetailScreen.style';
import { FontAwesome } from '@expo/vector-icons'

const DetailScreen = ({ route }) => {
  const {recipe} = route.params
  return (
    <View style={styles.container}>
      {/* <Header title={'Detalle'} /> */}
      <ScrollView 
      contentContainerStyle={styles.scrollContainer}
      bounces={false}
      showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{ uri: recipe.images[0] }} loading="auto" />
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>{recipe.title}</Text>
          </View>
          <View  style={styles.buttonContainer}>
            <View>
              <HeartButton recipe={recipe} />
            </View>
            <View style={{  marginLeft: 10}}>
              <ShareItem recipe={recipe}/>
              </View>
          </View>
        </View>
        <View style={styles.textContainer}>
        <Text>{recipe.description}</Text>
        <Text style={styles.subtitle}>
          <FontAwesome name="shopping-basket" size={24} color="#A2C6BD" /> Ingredientes:
        </Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index}>
            {ingredient.name}: {ingredient.amount}
          </Text>
        ))}
        <Text style={styles.subtitle}>
          <FontAwesome name="cutlery" size={24} color="#A2C6BD" /> Instrucciones:
        </Text>
        {recipe.instructions.map((instruction, index) => (
          <Text key={index}>{instruction}</Text>
        ))}
      </View>
      
      </ScrollView>
    </View>
  );
};


export default DetailScreen;