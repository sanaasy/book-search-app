import React, { useCallback } from "react";
import { View, TouchableOpacity, FlatList, Platform } from "react-native";
import getTheme from "../styles/getTheme";
import { BookProps } from "../BookDetails/BookDetails";

import data from "../../../assets/data/data";
import Book from "../Book/Book";
import { Box, Text, Header } from "../styles";
import { SharedElement, SharedElementTransition, nodeFromRef } from "react-native-shared-element";

const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

// const HomePage = ({ navigation }) => {
const HomePage = () => {
	const theme = getTheme();

	const renderItem = useCallback(({ item, index }: { item: BookProps; index: number }) => {
		return (
			<Box marginRight="m">
				<TouchableOpacity
					key={index}
					// onPress={() => navigation.navigate("Details", { ...item })}
					onPress={() => {}}
				>
					<Book {...item} />
				</TouchableOpacity>
			</Box>
		);
	}, []);

	return (
		<>
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
