import React, { useCallback } from "react";
import { TouchableOpacity, FlatList, Platform, Image } from "react-native";
import getTheme from "../styles/getTheme";
import { BookProps } from "../BookDetails/BookDetails";

import data from "../../../assets/data/data";
import Book from "../Book/Book";
import { Box, Header, Text } from "../styles";
import { SharedElement } from "react-navigation-shared-element";
import { ThemeContext } from "@shopify/restyle";

const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const HomePage = ({ navigation }) => {
	// const HomePage = () => {
	const theme = getTheme();

	const renderItem = useCallback(({ item }: { item: BookProps }) => {
		return (
			<Box marginRight="m" key={item.id}>
				<TouchableOpacity
					activeOpacity={0.8}
					style={{ marginBottom: 14 }}
					onPress={() => navigation.navigate("Details", { item })}
				>
					<Book {...item} />
				</TouchableOpacity>
			</Box>
		);
	}, []);

	return (
		<>
			<Text
				style={{
					textAlign: "center",
					fontSize: 30,
					fontWeight: "bold",
					paddingTop: 60,
					paddingBottom: 20,
					backgroundColor: theme.colors.cardPrimaryBackground,
				}}
			>
				HOME
			</Text>
			<Header title="Wishlist" />
			<FlatList
				keyExtractor={(item: BookProps) => item.id}
				data={data}
				renderItem={renderItem}
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{
					marginLeft: theme.spacing.m,
				}}
			/>
		</>
	);
};

export default HomePage;
