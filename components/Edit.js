import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { theme } from "../constants";
import firebase from '../firebase';

const Edit = (props) => {

    const handleEdit = () => {  
        firebase.firestore().collection('products').add({
            amountOfProducts: 43
        })
    }

    console.log(props);
    return (
        <View>
            <TextInput placeholder="name" style={styles.input} />
            <TextInput placeholder="number of products" style={styles.input} />
            <Button title="edit" />
            <Button title="delete" onPress={handleEdit} />
        </View>
    );
};

export default Edit;

const styles = StyleSheet.create({
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
