import React, {useEffect, useState, useMemo} from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';

import Gap from '../Gap';
import Button from '../Button';
import {getArticle} from '../../redux/ducks/action';

const Article = ({data}) => {
  const [article, setArticle] = useState([]);
  const dispatch = useDispatch();
  const articleData = useSelector(
    (state) => state.articleStore.data,
    shallowEqual,
  );
  console.log(articleData, 'articleData');
  useEffect(() => {
    dispatch(getArticle());
    fetchData();
    return () => {};
  }, []);

  const fetchData = async () => {
    try {
      setArticle(articleData);
    } catch (error) {
      console.log(error, 'erorr');
    }
  };

  const Item = ({title, id}) => (
    <View style={styles.container}>
      {/* <Image
          style={styles.imageBrand}
          source={{
            uri: url,
          }}
        /> */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.share}>
          <Text>98</Text>
          <Text>12 Comment</Text>
        </View>
        <Gap height={10} />
        <View style={styles.share}>
          <Text>Like</Text>
          <Text>Comment</Text>
          <Text>Share</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={article}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 20,
    marginVertical: 20,
  },
  imageBrand: {
    height: 120,
  },
  content: {
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingTop: 8,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  subContent: {display: 'flex', flexDirection: 'row'},
  description: {
    backgroundColor: '#E7F2F8',
    width: '95%',
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    marginVertical: 10,
  },
});
