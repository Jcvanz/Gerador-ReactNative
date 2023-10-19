import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { PasswordItem } from '../passwords/components/passwordItem';

export function Passwords() {
    // CRIA O ESTADO PARA LISTAR AS SENHAS (ARRAY)
    const [listPaswords, setListPasswords] = useState([]);

    const focused = useIsFocused();
    
    // CRIA UM ARMAZENAMENTO LOCAL (PEGA AS SENHAS SALVAS (getItem) E REMOVE AS SENHAS (removeItem))
    const { getItem, removeItem } = useStorage();
    
    // BUSCA A LISTA COM AS SENHAS 
    useEffect(() => {
        async function loadPasswords(){
            // PEGA A SENHA SALVA
            const passwords = await getItem("@pass");
            // SALVA NO useState
            setListPasswords(passwords);
        }

        loadPasswords();
    }, [focused]);
    
    // FUNÇÃO PARA REMOVER AS SENHAS
    async function handleDeletePassword(item) {
        // REMOVE A SENHA E SALVA NA CONSTANTE
        const passwords = await removeItem("@pass", item);
        // ATUALIZA A LISTA
        setListPasswords(passwords);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>
            <View style={styles.content}>
                {/* LISTA AS SENHAS EM TELA */}
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPaswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title: {
        fontSize: 20,
        color: "#FFF",
        fontWeight: "bold"
    },

    content: {
        flex: 1,
        paddingRight: 14,
        paddingLeft: 14,
    },
})