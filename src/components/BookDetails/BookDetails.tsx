import React from "react";
import { View, Image } from "react-native";
import { Text, Box } from "../styles";
import getTheme from "../styles/getTheme";

export interface BookProps {
	id: string;
	title: string;
	author: string;
	pages: string;
	rating: string;
	description: string;
	authorImg: string;
	thumbnail: string;
}

const BookDetails = ({ id, title, author, pages, rating, description, authorImg, thumbnail }: BookProps) => {
	// const BookDetails = ({route, navigation}) => {

	const theme = getTheme();
	// const {id, title, author, pages, rating, description, authorImg, thumbnail}: BookProps = route.params;

	return (
		<View>
			<Box style={{ justifyContent: "center", alignItems: "center" }}>
				<Image style={{ width: 200, height: 250 }} source={{ uri: thumbnail }} resizeMode="contain" />
				<Text>{title}</Text>
			</Box>
			<Text>{pages}</Text>
			<Text>{rating}</Text>
			<Image style={{ width: 50, height: 50 }} source={{ uri: authorImg }} resizeMode="contain" />
			<Text>{author}</Text>
			<Text>{description}</Text>
		</View>
	);
};

export default BookDetails;
