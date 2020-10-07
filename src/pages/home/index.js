import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Header} from 'react-native-elements';
import {COLORS} from '../../constants';

import Table from '../../components/Table';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Header
        backgroundColor={COLORS.primary}
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{text: 'User Management', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <View style={styles.tableContainer}>
        <View style={styles.headerTable}>
          <TouchableOpacity>
            <Icon
              name="add-circle"
              size={35}
              color="red"
              onPress={() => {}}></Icon>
          </TouchableOpacity>
        </View>
        <Table />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer: {
    flex: 1,
  },
  headerTable: {
    display: 'flex',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 5,
  },
});

// import React,{useEffect,useState} from 'react';
// import { StyleSheet, View, Text,StatusBar  } from 'react-native';
// import {useTheme} from '@react-navigation/native';

// import LoadingSekelaton from "../../components/LoadingSekelaton"
// import Article from "../../components/Article"
// import Header from "../../components/Header"

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//     image_url : "https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg",
//     content : "Use the color picker by clicking and dragging your cursor inside the picker area to"
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//     image_url : "https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg",
//     content : "Use the color picker by clicking and dragging your cursor inside the picker area to"
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//     image_url : "https://www.connecticutchildrens.org/wp-content/uploads/2020/04/child-home-office-2.jpg",
//     content : "Use the color picker by clicking and dragging your cursor inside the picker area to"
//   },
// ];

// const Home = () => {

//   const [state,setState] = useState(true)
//   useEffect(()=> {
//     setTimeout(() => {
//      setState(false)
//     }, 3000);
//   },[])

//   const theme = useTheme();
//   return (
//     <View style={{ flex: 1 }}>
//       <Header title="Community" />
//       {state ? <LoadingSekelaton data={DATA}/>
//     : <Article data={DATA} /> }
//     </View>
//   );
// }

// export default Home;
