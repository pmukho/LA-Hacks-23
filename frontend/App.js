
import Home from './pages/Home';
import Test from './pages/Test';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { StyleSheet, Switch, View } from 'react-native';
import Navbar from './components/Navbar';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return (
    // <BrowserRouter>
    //   {/* <NavBar /> */}
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/test" element={<Test />} />
    //   </Routes>
    // </BrowserRouter>
    <NativeRouter>
      <View style={styles.container}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
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