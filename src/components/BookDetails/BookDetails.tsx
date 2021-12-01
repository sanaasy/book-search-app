import React from "react";
import { View, Image } from "react-native";
import Text from "../styles/Text";
import getTheme from "../styles/getTheme";

interface BookProps {
	title: string
	author: string 
	pages: string 
	rating: string 
	description: string
	authorImg: string 
	thumbnail: string  
}

const BookDetails = ({title, author, pages, rating, description, authorImg, thumbnail}: BookProps) => {
	const theme = getTheme();
	
	return (
		<View>
			<Image source={{uri: thumbnail}} />
			<Text>{title}</Text>
			<Text>{pages}</Text>
			<Text>{rating}</Text>
			<Image source={{uri: authorImg}} />
			<Text>{author}</Text>
			<Text>{description}</Text>
		</View>
	);
};

export default BookDetails;
