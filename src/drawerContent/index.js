import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
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
  List,
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

  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primary}}>
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
            <List.Section>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('RootToko', {
                    screen: 'Toko',
                  });
                }}>
                <List.Item
                  title="User Management"
                  left={() => (
                    <Icon name="account-box-outline" color="black" size={24} />
                  )}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('RootToko', {
                    screen: 'Toko',
                  });
                }}>
                <List.Item
                  title="Identitas Toko"
                  left={() => <Icon name="alpha-t" color="black" size={24} />}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('RootToko', {
                    screen: 'Toko',
                  });
                }}>
                <List.Item
                  title="Dashboard"
                  left={() => (
                    <Icon name="home-outline" color="black" size={24} />
                  )}
                />
              </TouchableOpacity>
              <List.Accordion
                title="Master"
                left={(props) => (
                  <Icon name="book-multiple-outline" color="black" size={24} />
                )}>
                <TouchableOpacity>
                  <List.Item title="First item" />
                </TouchableOpacity>
                <List.Item title="Second item" />
              </List.Accordion>
              <List.Accordion
                title="Kasir"
                left={(props) => (
                  <Icon name="account-box-outline" color="black" size={24} />
                )}>
                <TouchableOpacity>
                  <List.Item title="First item" />
                </TouchableOpacity>
                <List.Item title="Second item" />
              </List.Accordion>
              <List.Accordion
                title="Laporan"
                left={(props) => (
                  <Icon name="account-box-outline" color="black" size={24} />
                )}>
                <TouchableOpacity>
                  <List.Item title="First item" />
                </TouchableOpacity>
                <List.Item title="Second item" />
              </List.Accordion>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('RootToko', {
                    screen: 'Toko',
                  });
                }}>
                <List.Item
                  title="Dapur"
                  left={() => (
                    <Icon name="account-box-outline" color="black" size={24} />
                  )}
                />
              </TouchableOpacity>
            </List.Section>

            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label={`Dashboard`}
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            /> */}
            {/* <DrawerItem
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
                    <Icon
                      name="safe-square-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Bank"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="reorder-horizontal" color={color} size={size} />
                  )}
                  label="Kategori"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="table-furniture" color={color} size={size} />
                  )}
                  label="Satuan"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                      name="room-service-outline"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Barang"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="receipt" color={color} size={size} />
                  )}
                  label="Ketersediaan Menu"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="account-multiple" color={color} size={size} />
                  )}
                  label="Member"
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
                    <Icon name="attach-money" color={color} size={size} />
                  )}
                  label="Beli Langsung"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="card-membership" color={color} size={size} />
                  )}
                  label="Reseller"
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
                  label="Produk Terlaris"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Transaksi Langsung"
                  onPress={() => {
                    props.navigation.navigate('Discover');
                  }}
                />
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon name="home-outline" color={color} size={size} />
                  )}
                  label="Transaksi Member"
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
              label="Dapur"
              onPress={() => {
                props.navigation.navigate('Discover');
              }}
            /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <List.Section>
          <TouchableOpacity
            onPress={() => {
              signOut();
            }}>
            <List.Item
              title="Sing Out"
              left={() => <Icon name="exit-to-app" color="black" size={24} />}
            />
          </TouchableOpacity>
        </List.Section>
        {/* <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        /> */}
      </Drawer.Section>
    </SafeAreaView>
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
