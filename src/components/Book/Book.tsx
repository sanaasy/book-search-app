import React from "react";
import { View, Image } from "react-native";
import { BookProps } from "../BookDetails/BookDetails";
import { Text, Box } from "../styles";
import getTheme from "../styles/getTheme";

const BookDetails = (book: BookProps) => {
	const theme = getTheme();


	return (
		<Box style={{ justifyContent: "center", alignItems: "center" }}>
			<Image style={{ width: 200, height: 250 }} source={{ uri: book.thumbnail }} resizeMode="contain" />
			<Text>{book.title}</Text>
		</Box>
	);
};

export default BookDetails;
