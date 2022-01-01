import React from "react";
import { View, Image } from "react-native";
import { BookProps } from "../BookDetails/BookDetails";
import { Text, Box } from "../styles";
import { SharedElement } from "react-navigation-shared-element";
import getTheme from "../styles/getTheme";

const Book = (book: BookProps) => {
	const theme = getTheme();

	return (
		<>
			<SharedElement id={`${book.id}.image`}>
				<Image style={{ width: 200, height: 250 }} source={{ uri: book.thumbnail }} resizeMode="contain" />
			</SharedElement>
			<SharedElement id={`${book.id}.title`}>
				<Text textAlign="center" variant="caption" margin="xs">
					{book.title}
				</Text>
			</SharedElement>
		</>
	);
};

export default Book;
