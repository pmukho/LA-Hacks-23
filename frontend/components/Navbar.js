import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default function Navbar() {
    return (
        <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Home</Text>
            </Link>
            <Link
                to="/about"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <Text>About</Text>
            </Link>
            <Link
                to="/topics"
                underlayColor="#f0f4f7"
                style={styles.navItem}
            >
                <Text>Topics</Text>
            </Link>
      </View>
    );
}

const styles = StyleSheet.create({
    nav: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
    navItem: {
      flex: 1,
      alignItems: "center",
      padding: 10
    },
    subNavItem: {
      padding: 5
    },
    topic: {
      textAlign: "center",
      fontSize: 15
    }
  });