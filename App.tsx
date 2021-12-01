import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/components/styles/theme";

import HomePage from "./src/components/HomePage/HomePage";
import BookDetails from "./src/components/BookDetails/BookDetails";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<View style={styles.container}>
				<StatusBar />
				<HomePage />
				{/* <BookDetails  */}
			</View>
		</ThemeProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 60,
		// justifyContent: "center",
	},
});
