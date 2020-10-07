import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

import {COLORS} from '../constants';

const DrawerContent = (props) => {
  const [dropValue, setDropValue] = useState(false);
  const [dropKasir, setDropKasir] = useState(false);
  const [dropLaporan, setDroplaporan] = useState(false);
  const dropMenu = () => {
    setDropValue(!dropValue);
  };
  const dropMenuKasir = () => {
    setDropKasir(!dropKasir);
  };
  const dropMenuLaporan = () => {
    setDroplaporan(!dropLaporan);
  };

  const signOut = () => {
    props.navigation.navigate('Login');
  };

  const [state, setState] = useState();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <TouchableOpacity
                style={{display: 'flex', flexDirection: 'row'}}
                onPress={() => {
                  props.navigation.navigate('DrawerNavigator', {
                    screen: 'Profiles',
                  });
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://api.adorable.io/avatars/50/abott@adorable.png',
                  }}
                  size={50}
                />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>Super Adimin</Title>
                  <Caption style={styles.caption}>@admin</Caption>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <View>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon name="account-box-outline" color={color} size={size} />
                )}
                label="User Management"
                onPress={() => {
                  props.navigation.navigate('RootHome', {
                    screen: 'HomeScreen',
                  });
                }}
              />
            </View>

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="alpha-t" color={color} size={size} />
              )}
              label="Identitas Toko"
              onPress={() => {
                props.navigation.navigate('RootToko', {
                  screen: 'Toko',
                });
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label={`Dashboard`}
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-multiple-outline" color={color} size={size} />
              )}
              label="Master"
              onPress={() => {
                dropMenu();
              }}
              labelStyle={styles.master1}
            />
            {dropValue && (
              <Animatable.View animation="fadeInDown" style={styles.master}>
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Bank"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Kategori"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
              </Animatable.View>
            )}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="database-edit" color={color} size={size} />
              )}
              label="Kasir"
              onPress={() => {
                dropMenuKasir();
              }}
              labelStyle={styles.master1}
            />
            {dropKasir && (
              <Animatable.View animation="fadeInDown" style={styles.master}>
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Bank"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Kategori"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
              </Animatable.View>
            )}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="calendar-month-outline" color={color} size={size} />
              )}
              label="Laporan"
              onPress={() => {
                dropMenuLaporan();
              }}
              labelStyle={styles.master1}
            />
            {dropLaporan && (
              <Animatable.View animation="fadeInDown" style={styles.master}>
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Bank"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Kategori"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
              </Animatable.View>
            )}
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Discover');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Discover');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Discover');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Discover');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  master: {
    marginLeft: 50,
    // backgroundColor: 'red',
  },
  master1: {
    fontWeight: 'bold',
    // backgroundColor: 'red',
  },
});