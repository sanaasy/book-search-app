import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "./src/components/styles/theme";

import HomePage from "./src/components/HomePage/HomePage";
import BookDetails from "./src/components/BookDetails/BookDetails";

import data from "./assets/data/data";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<StatusBar />
				<Stack.Navigator>
					<Stack.Screen name="Home" component={HomePage} options={{ title: "Home" }} />
					{/* <Stack.Screen name="Details" component={BookDetails} /> */}
				</Stack.Navigator>
			</ThemeProvider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
	},
});
