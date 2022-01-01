import React from "react";
import { View, Image } from "react-native";
import { BookProps } from "../BookDetails/BookDetails";
import { Text, Box } from "../styles";
import { SharedElement } from "react-navigation-shared-element";
import getTheme from "../styles/getTheme";

const Book = (book: BookProps) => {
	const theme = getTheme();

	return (
		<Box style={{ justifyContent: "center", alignItems: "center" }}>
			<SharedElement id={book.id}>
				<Image style={{ width: 200, height: 250 }} source={{ uri: book.thumbnail }} resizeMode="contain" />
			</SharedElement>
			<Text textAlign="center">{book.title}</Text>
		</Box>
	);
};

export default Book;
