import React from "react";
import { StyleSheet, Text, View } from "react-native";
import getTheme from "../styles/getTheme";

const HomePage = () => {
	const theme = getTheme();

	console.log(theme);

	return (
		<View>
			<Text style={{ fontWeight: "bold", fontSize: 24, marginLeft: theme.spacing.m }}>Wishlist</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wishlist: {
		fontWeight: "bold",
		fontSize: 24,
		marginLeft: 8,
	},
});

export default HomePage;
