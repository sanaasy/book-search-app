import React, { useCallback } from "react";
import { View, TouchableOpacity, FlatList, Platform } from "react-native";
import { Header } from "react-native-elements";
import Text from "../styles/Text";
import getTheme from "../styles/getTheme";
import { BookProps } from "../BookDetails/BookDetails";

import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated";

import data from "../../../assets/data";
import Book from "../Book/Book";
import { Box } from "../styles";

const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const HomePage = () => {
	const theme = getTheme();
	const scrollY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler((event) => {
		scrollY.value = event.contentOffset.y;
	});

	// const renderItem = useCallback(({book}: {book: BookProps}) => {
	const renderItem = useCallback(({ item, index }: { item: BookProps; index: number }) => {
		return (
			<Box>
				<TouchableOpacity key={index} onPress={() => {}} style={{ marginRight: theme.spacing.m }}>
					<Book {...item} />
				</TouchableOpacity>
			</Box>
		);
	}, []);

	const renderHeader = () => {
		return (
			<Header
				centerComponent={{ text: "Wishlist", style: { color: "#fff" } }}
			/>
		);
	};

	return (
		<FlatList
			keyExtractor={(item: BookProps) => item.id}
			data={data}
			renderItem={renderItem}
			horizontal
			showsHorizontalScrollIndicator={false}
			style={{
				marginLeft: theme.spacing.m,
			}}
			// ListHeaderComponent={renderHeader}
		/>
	);
};

export default HomePage;
