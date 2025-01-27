import { Image, StyleSheet, Platform, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from"@/components/appcomponents/TopBar"
import Greetings from "@/components/appcomponents/Greetings";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Link } from 'expo-router';
export default function HomeScreen() {
  const [isSelected, setIsSelected] = useState(false);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("screen").width;
  return (
    <SafeAreaView style={styles.Container}>
    <TopBar />
    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
      <Greetings/>
      {/* Link Cards */}
      <View style={styles.topCardContainer}>
        <View style={styles.topCardRow}>
          <Link href='/signals' style={{width:Dimensions.get("screen").width*0.3, height:96}} >
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Signals</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/signals.png")} />
              </View>
            </View>
          </Link >
          <Link href='/explore' style={{width:Dimensions.get("screen").width*0.3, height:96}}>
          <View style={styles.topCard}>
            <View>
              <Text style={styles.cardTitle}>Explore</Text>
            </View>
            <View>
              <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/explore.png")} />
            </View>
          </View>
          </Link>
          <Link href="/login" style={{width:Dimensions.get("screen").width*0.3, height:96}}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Market</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/market.png")} />
              </View>
            </View>
          </Link>
        </View>
        <View style={styles.topCardRow}>
          <Link href="/login" style={{width:Dimensions.get("screen").width*0.3, height:96}}>
          <View style={styles.topCard}>   
            <View>
              <Text style={styles.cardTitleSubscription}>Subscription</Text>
            </View>
            <View>
              <Image style={styles.ImageCardSubscription} source={require("../../assets/images/iconsapp/subscription.png")} />
            </View>
          </View>
          </Link>
          <Link href='/coin' style={{width:Dimensions.get("screen").width*0.3, height:96}}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Coins</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/coins.png")} />
              </View>
            </View>
          </Link>
          <Link href='/coin' style={{width:Dimensions.get("screen").width*0.3, height:96}}>
            <View style={styles.topCard}>
              <View>
                <Text style={styles.cardTitle}>Reports</Text>
              </View>
              <View>
                <Image style={styles.ImageCard} source={require("../../assets/images/iconsapp/report.png")} />
              </View>
            </View>
          </Link>
        </View>
      </View>
      {/* Coins Main Part Dashboard */}
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
    gap: 6,
    alignItems:'center',
    // paddingHorizontal:10,
  },
  topCardRow:{
    display:'flex',
    flexDirection:'row',
    gap:6,
    // justifyContent:'space-between'
  },
  topCard:{
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: Dimensions.get("screen").width * 0.3,
    height:96,
    borderRadius:15,
    backgroundColor:'#113838',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
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
