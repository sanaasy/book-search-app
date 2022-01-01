import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import theme from "./src/components/styles/theme";

import HomePage from "./src/components/HomePage/HomePage";
import BookDetails from "./src/components/BookDetails/BookDetails";

const Stack = createSharedElementStackNavigator();

const options = {
	headerBackTitleVisible: false,
	cardStyleInterpolator: ({ current: { progress } }) => {
		return {
			cardStyle: {
				opacity: progress,
			},
		};
	},
};

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer>
				<ThemeProvider theme={theme}>
					<Stack.Navigator screenOptions={{ headerShown: false }}>
						<Stack.Screen name="Home" component={HomePage} options={{ title: "Home" }} />
						<Stack.Screen name="Details" component={BookDetails} options={() => options} />
					</Stack.Navigator>
				</ThemeProvider>
			</NavigationContainer>
		</View>
	);
}

