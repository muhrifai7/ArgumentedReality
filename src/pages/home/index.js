import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Text,StatusBar  } from 'react-native';

import LoadingSekelaton from "../../components/LoadingSekelaton"
import Article from "../../components/Article"
import Header from "../../components/Header"

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image_url : "https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg",
    content : "Use the color picker by clicking and dragging your cursor inside the picker area to"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image_url : "https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg",
    content : "Use the color picker by clicking and dragging your cursor inside the picker area to"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image_url : "https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg",
    content : "Use the color picker by clicking and dragging your cursor inside the picker area to"
  },
];

const Home = () => {
  const [state,setState] = useState(true)
  useEffect(()=> {
    setTimeout(() => {
     setState(false)
    }, 3000);
  },[])
  return (
    <View style={{ flex: 1 }}>
      <Header title="Community" />
      {state ? <LoadingSekelaton data={DATA}/>
    : <Article data={DATA} /> }
    </View>
  );
}

export default Home;

const styes = StyleSheet.create({

})