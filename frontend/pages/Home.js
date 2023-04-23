import { StyleSheet, Text, View } from "react-native";


export default function Home() {
    // return <h1> Home </h1>;
    return (
        <Text style={styles.header}>Home</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    }
});