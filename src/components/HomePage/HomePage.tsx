import React from "react";
import { View } from "react-native";
import Text from "../styles/Text";
import getTheme from "../styles/getTheme";

const HomePage = () => {
	const theme = getTheme();
	
	return (
		<View>
			<Text marginLeft="m" marginTop="l" variant="header">
				Recently viewed
			</Text>
			<Text marginLeft="m" marginTop="l" variant="header">
				Wishlist
			</Text>
		</View>
	);
};

export default HomePage;
