import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { windowHeight, windowWidth } from '../../../constants'

const ImageCard = ({ data }) => {
  const { cardContainer, cardCover, cardCoverContainer, cardTitle } = styles
  const { name: title, image } = data

  return (
    <View style={cardContainer}>
      <View style={cardCoverContainer}>
        <Image style={cardCover} source={{ uri: image }} />
      </View>
      <Text style={cardTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 10
  },
  cardCover: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center'
  },
  cardCoverContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.4,
    elevation: 5,
    height: '85%'
  },
  cardContainer: {
    height: windowHeight * 0.55,
    width: windowWidth * 0.45,
    marginVertical: 10
  }
})

export { ImageCard }
