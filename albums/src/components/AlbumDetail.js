import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// when you have more (e.g. x 3 like below) references to props
// its good convention to d-structure it out of argument of props
// (props) turns into ({album})
// and because you use album reference (x3) you need to d-structure as well
// you can d-structure it directly next to ({album}) or list below in const/ more tidy
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ url: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
};

export default AlbumDetail;
