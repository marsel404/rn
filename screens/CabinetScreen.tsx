import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function CabinetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Image
        source={require('../images/logo.png')}
        style={styles.logoHeader}
        />
        <TouchableOpacity style={styles.viewGoBack} onPress={() => navigation.navigate('PhoneNumber')}>
        <Image 
            source={require('../images/arrow.png')}
        />
        </TouchableOpacity>
      </View>
      <View style={{ height: 120 }}>
        <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewDeals}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.scrollViewButton}>
          <Image source={require('../images/deal1.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollViewButton}>
          <Image source={require('../images/deal2.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollViewButton}>
          <Image source={require('../images/deal3.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollViewButton}>
          <Image source={require('../images/deal4.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.scrollViewButton}>
          <Image source={require('../images/deal5.png')} />
        </TouchableOpacity>
      </ScrollView>
      </View> 
      <View style={styles.viewCodes}>
        <View style={styles.viewCode}>
          <Text style={styles.textCode}>565203046</Text>
          <Image
            source={require('../images/refresh.png')} 
            style={styles.imageRefreshRound}
          />  
        </View>
        <View style={styles.viewCardNumber}>
          <Text style={styles.textCardNumber}>№313267</Text>
          <Image 
            source={require('../images/round.png')}
            style={styles.imageRefreshRound}
          />
        </View>
      </View>
      <View style={styles.viewInfo}>
        <Image
          source={require('../images/qr_code.jpg')}
        />
        <View style={styles.viewInfoText}>
          <Text style={styles.textAmount}>100 B</Text>
          <Text style={styles.textCardType}>GOLD</Text>
          <Text style={styles.textHowMany}>+2 бонуса за каждые 100 р</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonManage}>
        <Image source={require('../images/profile.png')} />
        <Text style={styles.textManage}>Профиль</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonManage}>
        <Image source={require('../images/refresh.png')} />
        <Text style={styles.textManage}>Способы оплаты</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonManage}>
        <Image source={require('../images/round.png')} />
        <Text style={styles.textManage}>Промокоды и акции</Text>
      </TouchableOpacity>
      <View><Text>df</Text></View>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    viewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    logoHeader: {
        width: 100,
        resizeMode: 'contain',
    },
    viewGoBack: {
        paddingRight: 12,
    },
    scrollViewDeals: {
        padding: 16,
    },
    scrollViewButton: {
        marginRight:12,
    },
    viewCodes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
    },
    viewCode: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCode: {
        color: '#fff',
        fontSize: 17,
    },
    viewCardNumber: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textCardNumber: {
        color: '#777',
        fontSize: 17,
    },
    imageRefreshRound: {
        width: 12,
        marginLeft: 8,
        resizeMode: 'contain',
    },
    viewInfo: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 16,
    },
    viewInfoText: {
        marginLeft: 10,
    },
    textAmount: {
        color: '#fff',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    textCardType: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    },
    textHowMany: {
        color: '#999',
        fontSize: 16,
    },
    buttonManage: {
        padding: 14,
        backgroundColor: '#333',
        borderRadius: 5,
        alignItems: 'center', 
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 10,
    },
    textManage: {
        color: 'yellow',
        marginLeft: 14,
        fontSize: 16,
        fontWeight: 'bold',
    }
})