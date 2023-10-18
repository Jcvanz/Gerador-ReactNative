import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { ModalPassword } from "../../components/modal";

export function Home() {
  
    const [size, setSize] = useState(10);
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function generatePassword() {
        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let password = '';

        for(let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }

        setPasswordValue(password);
        setModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />

            <Text style={styles.title}>{size} Caracteres</Text>

            <View style={styles.area}>
                <Slider 
                    style={{heigth: 50}} 
                    minimumValue={6} 
                    maximumValue={20}
                    value={size}
                    onValueChange={(value) => setSize(value.toFixed(0))}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={passwordValue} handleClouse={() => setModalVisible(false)} />
            </Modal>
        </View>    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3F3",
        justifyContent: "center",
        alignItems: "center",
    },

    logo: {
        marginBottom: 60
    },

    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8,
    },

    button: {
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8, 
        marginBottom: 18
    },

    buttonText: {
        color: "#FFF",
        fontSize: 20,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20
    }
})