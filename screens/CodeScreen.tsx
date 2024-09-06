import React, {useRef, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { Alert } from "react-native";


export default function CodeScreen({ navigation }) {
    const input1Ref = useRef<TextInput>(null);
    const input2Ref = useRef<TextInput>(null);
    const input3Ref = useRef<TextInput>(null);
    const input4Ref = useRef<TextInput>(null);
    const input5Ref = useRef<TextInput>(null);
    const input6Ref = useRef<TextInput>(null);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [input5, setInput5] = useState('');
    const [input6, setInput6] = useState('');


    const handleChange = (text: string, index: number) => {
        switch (index) {
          case 0:
            setInput1(text);
            if (text.length === 1) input2Ref.current?.focus();
            break;
          case 1:
            setInput2(text);
            if (text.length === 1) input3Ref.current?.focus();
            break;
          case 2:
            setInput3(text);
            if (text.length === 1) input4Ref.current?.focus();
            break;
          case 3:
            setInput4(text);
            if (text.length === 1) input5Ref.current?.focus();
            break;
          case 4:
            setInput5(text);
            if (text.length === 1) input6Ref.current?.focus();
            break;
          case 5:
            setInput6(text);
            break;
        };
    };

    const getInputValues = () => {
        return input1 + input2 + input3 + input4 + input5 + input6;
    };

    const checkCode = () => {
        const code = getInputValues();
        if (code == ('123456')) {
            navigation.navigate('Cabinet');
        } else {
            Alert.alert(
                'Ошибка',
                'Неправильно введён код',
                [{ text: 'ОК' }]
            )
        }
    };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.viewGoBack} onPress={() => navigation.navigate('PhoneNumber')}>
                <Image 
                    source={require('../images/arrow.png')}
                />
            </TouchableOpacity>
            <Text style={styles.textHeading}>
                Подтверждение номера
            </Text>
            <View style={styles.viewInput}>
                <TextInput
                    ref={input1Ref}
                    maxLength={1}
                    style={styles.inputInput}
                    placeholder="0"
                    placeholderTextColor="#888" 
                    keyboardType="phone-pad"
                    value={input1}
                    onChangeText={text => handleChange(text, 0)}
                />
                <TextInput
                    ref={input2Ref}
                    maxLength={1}
                    style={styles.inputInput}
                    placeholder="0"
                    placeholderTextColor="#888" 
                    keyboardType="phone-pad"
                    value={input2}
                    onChangeText={text => handleChange(text, 1)}
                />
                <TextInput
                    ref={input3Ref}
                    maxLength={1}
                    style={styles.inputInput}
                    placeholder="0"
                    placeholderTextColor="#888" 
                    keyboardType="phone-pad"
                    value={input3}
                    onChangeText={text => handleChange(text, 2)}
                />
                <TextInput
                    ref={input4Ref}
                    maxLength={1}
                    style={styles.inputInput}
                    placeholder="0"
                    placeholderTextColor="#888" 
                    keyboardType="phone-pad"
                    value={input4}
                    onChangeText={text => handleChange(text, 3)}
                />
                <TextInput
                    ref={input5Ref}
                    maxLength={1}
                    style={styles.inputInput}
                    placeholder="0"
                    placeholderTextColor="#888" 
                    keyboardType="phone-pad"
                    value={input5}
                    onChangeText={text => handleChange(text, 4)}
                />
                <TextInput
                    ref={input6Ref}
                    maxLength={1}
                    style={styles.inputInput}
                    placeholder="0"
                    placeholderTextColor="#888" 
                    keyboardType="phone-pad"
                    value={input6}
                    onChangeText={(text) => handleChange(text, 5)}
                />
            </View>
            <View style={styles.viewCodeSent}>
                <Text style={styles.textCodeSent}>Код отправлен на номер{"\n"}+79000000000</Text>
            </View>
            <View style={styles.buttonGetCode}>
                <TouchableOpacity style={styles.button} onPress={checkCode}>
                    <Text style={styles.buttonText}>Продолжить</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
};

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    viewGoBack: {
        alignItems: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
    textHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        paddingTop: 4,
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputInput: {
        color: '#fff',
        fontSize: 22,
    },
    buttonGetCode: {
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
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
    viewCodeSent: {
        marginTop: 18,
        marginBottom: 14,
    },
    textCodeSent: {
        fontSize: 13,
        color: '#ccc',
        textAlign: 'center',
    },
});