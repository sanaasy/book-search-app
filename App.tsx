import React from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "./src/components/HomePage/HomePage";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/components/styles/theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<View style={styles.container}>
				<HomePage />
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#ECF0F1",
	},
});
