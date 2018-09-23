import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// when you have more (e.g. x 3 like below) references to props
// its good convention to d-structure it out of argument of props
// (props) turns into ({album})
// and because you use album reference (x3) you need to d-structure as well
// you can d-structure it directly next to ({album}) or list below in const/ more tidy
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const { thumbnailStyle,
          headerContentStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle
        } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

//image will not appear until you add style for it
// width to null ?
const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }

};

export default AlbumDetail;
