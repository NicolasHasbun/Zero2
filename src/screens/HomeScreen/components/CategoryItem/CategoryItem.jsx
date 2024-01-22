import { useDispatch } from 'react-redux' 
import { setCategorySelected } from '../../../../features/explorer/explorerSlice'
import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import { Card } from '../../../../components'
import styles from './CategoryItem.style'

const CategoryItem = ({ category, picture, navigation }) => {

  const dispatch = useDispatch()
  
  return (
    <Pressable onPress={() => {
      dispatch(setCategorySelected(category))
      navigation.navigate("Recetas",{category})}}>
      <Card style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={{ uri: picture }} 
            style={styles.image}
          />
          <Text style={styles.text}>{category}</Text>
        </View>
      </Card>
    </Pressable>
  )
}

export default CategoryItem

