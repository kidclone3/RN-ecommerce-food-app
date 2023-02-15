/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

// active to hide debug
// import { LogBox } from 'react-native';
// LogBox.ignoreAllLogs();

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
    };

    return (
        <TailwindProvider utilities={utilities}>
            <SafeAreaView style={styles.root} edges={['right', 'top', 'left']}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <Navigation />
                {/* <HomeScreen /> */}
            </SafeAreaView>
        </TailwindProvider>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#F9FBFC',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
