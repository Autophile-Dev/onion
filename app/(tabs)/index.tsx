import { Image, StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from"@/components/appcomponents/TopBar"
import Greetings from "@/components/appcomponents/Greetings";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Link } from 'expo-router';
export default function HomeScreen() {
  const [isSelected, setIsSelected] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
    <TopBar />
    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <Greetings/>
      <View style={styles.topCardContainer}>
        <View style={styles.topCardRow}>
          <Link href='/signals' style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Signals</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/signals.png")} />
            </View>
          </Link >
          <Link href='/explore' style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Explore</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/explore.png")} />
            </View>
          </Link>
          <TouchableOpacity  style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Market</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/market.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.topCardRow}>
          <View style={styles.topCard}>
            <View>
              <Text style={styles.cardTitleSubscription}>Subscription</Text>
            </View>
            <View>
              <Image style={styles.ImageCardSubscription} source={require("../../assets/images/iconsapp/subscription.png")} />
            </View>
          </View>
          <Link href='/coin' style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Coins</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/coins.png")} />
            </View>
          </Link>
          <Link href='/coin' style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Reports</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/report.png")} />
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    backgroundColor:'#1c4d4d'
  },
  contentContainer:{
    paddingBottom:130,
  },
  topCardContainer:{
    display:'flex',
    flexDirection:'column',
    gap: 8,
    paddingHorizontal:20,
  },
  topCardRow:{
    display:'flex',
    flexDirection:'row',
    gap:8,
  },
  topCard:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    width:112,
    height:96,
    borderRadius:15,
    backgroundColor:'#113838',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    gap:10,
  },
  ImageCard:{
    width:30,
    height:30,
    resizeMode: "contain",
    // tintColor:'#FF9900'
  },
  ImageCardSubscription:{
    width:30,
    height:30,
    resizeMode: "contain",
    tintColor:'#FF9900'
  },
  cardTitle:{
    fontSize:14,
    color:'#ffffff'
  },
  cardTitleSubscription:{
     fontSize:14,
      color:'#FF9900'
  }
});
