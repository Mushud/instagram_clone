import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Button, Image } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen({navigation}: StackScreenProps<any>) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 25, fontFamily: "styled-font" }}>
          Intagram
        </Text>
        <View style={{ flexDirection: "row", backgroundColor: "transparent" }}>
          <AntDesign
            name="hearto"
            style={{ marginRight: 10 }}
            size={18}
            color="red"
          />
          <AntDesign name="message1" size={18} color="red" />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "grey",
          }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1616257786474-0cf2fbefd6c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80",
            }}
          />
        </View>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "grey",
          }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            }}
          />
        </View>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "grey",
          }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1616257786474-0cf2fbefd6c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80",
            }}
          />
        </View>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "grey",
          }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1614566704030-47ec139ec668?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
            }}
          />
        </View>
        <View
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "grey",
          }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 30 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1616257786474-0cf2fbefd6c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80",
            }}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          {/* header here */}
          <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
            <Image
              style={{ height: 30, width: 30, borderRadius: 30 }}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1616257786474-0cf2fbefd6c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80",
              }}
            />
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontWeight: "bold" }}>Dennis August</Text>
              <Text style={{ fontSize: 11 }}>Christ Assembly Worldwide</Text>
            </View>
          </View>
          <Image
            style={{ height: 250, marginTop: 10 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1616257786474-0cf2fbefd6c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=648&q=80",
            }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <AntDesign
                name="heart"
                size={18}
                color="red"
                style={{ marginRight: 10 }}
              />
              <AntDesign name="message1" size={18} color="grey" />
              <Feather
                name="send"
                size={18}
                color="grey"
                style={{ marginLeft: 10 }}
              />
            </View>
            <Feather
              name="bookmark"
              size={18}
              color="grey"
              style={{ marginRight: 20, paddingTop: 10 }}
            />
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Text>
              Liked by <Text style={{ fontWeight: "bold" }}> name </Text>and
              16,323 others
            </Text>
            <Text>
               <Text style={{ fontWeight: "bold" }}>dennis </Text>and
              Fine wine but not yours to sip
            </Text>
            <Text style={{color: "grey"}}>View all 501 comments</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
