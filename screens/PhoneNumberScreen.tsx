import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


function PhoneNumberScreen({ navigation }) {
    const [isChecked, setIsCheked] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');

    const verifyPhoneNumber = () => {
        if (phoneNumber == ('9000000000')) {
            navigation.navigate('Code');
        } else {
            Alert.alert(
                'Ошибка',
                'Неправильно введён номер',
                [{ text: 'ОК' }],
            )
        }
    };

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View>
          <Text style={styles.textEnter}>Вход</Text>
        </View>
        <View style={styles.phoneContainer}>
          <Image
            source={require('../images/flag.jpg')}
            style={styles.flag}
          />
          <Text style={styles.text_7}>+7</Text>
          <TextInput 
            style={styles.input} 
            placeholder="| Введите номер телефона" 
            keyboardType="phone-pad" 
            placeholderTextColor="#888" 
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.buttonGetCode}>
          <TouchableOpacity style={styles.button} onPress={verifyPhoneNumber}>
            <Text style={styles.buttonText}>Получить код авторизации</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewRules}>
          <Text style={styles.textRules}>Правила</Text>
        </View>
        <View style={styles.viewAgreement}>
          <CheckBox 
            value={isChecked}
            onValueChange={setIsCheked}
            tintColors={{ true: '#7db925', false: '#fff' }}
          />
          <Text style={styles.textAgreement}>Продолжая авторизацию, вы согласны с условиями участия в программе лояльности Brent Fueller и даю согласие на обработку моих персональных данных на условиях, определённых в</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.scrollViewDocs}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.scrollViewButton}>
            <Text style={styles.scrollViewButtonText}>Политика конфиденциальности</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollViewButton}>
            <Text style={styles.scrollViewButtonText}>Соглашение на предоставление персональных данных</Text>
          </TouchableOpacity>
        </ScrollView>
        
        <View style={styles.viewFindStation}>
          <TouchableOpacity style={styles.buttonFindStation} onPress={() => console.log('Нажали на поиск заправки')}>
            <Text style={styles.buttonTextFindStation}>Найти заправку</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    logoContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 24,
    
    },
    logo: {
        width: 200,
        resizeMode: 'contain',
    },
    textEnter: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'left',
        marginBottom: 20,
        fontWeight: 'bold',
        marginLeft: 16,
        marginRight: 16,
    },
    buttonGetCode: {
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },
    input: {
        width: '100%',
        color: '#888',
    },
    button: {
        width: '100%',
        padding: 12,
        backgroundColor: '#7db925',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#333',
        borderRadius: 6,
        marginBottom: 12,
        marginLeft: 16,
        marginRight: 16,
    },
    flag: {
        width: 12,
        height: 12,
        marginLeft: 10,
    },
    text_7: {
        fontSize: 13,
        marginRight: 14,
        marginLeft: 10,
        color: '#888',
    },
    viewRules: {
        marginTop: 18,
        marginBottom: 14,
    },
    textRules: {
        fontSize: 13,
        color: '#ccc',
        textAlign: 'center',
    },
    viewAgreement: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
        marginLeft: 16,
        marginRight: 16,
    },
    textAgreement: {
        color: '#7db925',
        paddingLeft: 10,
        paddingRight: 30,
        fontSize: 13,
    },
    scrollViewDocs: {
        height: 40,
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
    },
    scrollViewButton: {
        marginRight: 20,
        padding: 12,
        backgroundColor: '#222',
        borderRadius: 5,
        
    },
    scrollViewButtonText: {
        color: 'yellow',
        fontSize: 12,
    },
    viewFindStation: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        
        paddingBottom: 26,
    },
    buttonFindStation: {
        width: '100%',
        padding: 14,
        backgroundColor: '#333',
        borderRadius: 5,
        alignItems: 'center',  
    },
    buttonTextFindStation: {
        color: 'yellow',
        fontSize: 14,
    }
  });
  
export default PhoneNumberScreen;