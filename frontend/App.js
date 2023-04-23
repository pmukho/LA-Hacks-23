
import Home from './pages/Home';
import Test from './pages/Test';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { StyleSheet, Switch, View } from 'react-native';
import Navbar from './components/Navbar';
import { AppProvider, UserProvider } from '@realm/react';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState(null);
  const app = useApp();

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = app.currentUser;
      if (currentUser) {
        setUser(currentUser);
      } else {
        try {
          await app.logIn(Realm.Credentials.anonymous());
          setUser(app.currentUser);
        } catch (error) {
          console.error('Failed to log in', error);
        }
      }
    };
    checkUser();
  }, [app]);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return (
    // <NativeRouter>
    //   <View style={styles.container}>
    //     <Navbar />
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route path="/test" element={<Test />} />
    //     </Routes>
    //   </View>
    // </NativeRouter>
    <AppProvider id="application-0-zsjvp">
      <UserProvider fallback={LoginComponent}>
        <NativeRouter>
          <View style={styles.container}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
            </Routes>
          </View>
        </NativeRouter>
      </UserProvider>
    </AppProvider>
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