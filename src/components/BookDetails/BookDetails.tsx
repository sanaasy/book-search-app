import React, { useRef } from "react";
import { StyleSheet, Image } from "react-native";
import { Text, Box } from "../styles";
import getTheme from "../styles/getTheme";
import { SharedElement } from "react-navigation-shared-element";
import { SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

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

// const BookDetails = ({ id, title, author, pages, rating, description, authorImg, thumbnail }: BookProps) => {
const BookDetails = ({ route, navigation }) => {
	const theme = getTheme();
	const buttonRef = React.useRef();
	const { id, title, author, pages, rating, description, authorImg, thumbnail }: BookProps = route.params.item;

	return (
		<>
			<Box style={{ justifyContent: "center", alignItems: "center" }}>
				<SharedElement id={id}>
					<Image style={{ width: 400, height: 250 }} source={{ uri: thumbnail }} resizeMode="cover" />
				</SharedElement>
				<Text style={{ textAlign: "center" }}>{title}</Text>
			</Box>
			<Animatable.View
				ref={buttonRef}
				animation="fadeIn"
				duration={600}
				delay={300}
				style={[StyleSheet.absoluteFillObject]}
			>
				<MaterialCommunityIcons
					name="close"
					size={28}
					color="#fff"
					style={{
						position: "absolute",
						top: 40,
						right: 20,
						zIndex: 2,
					}}
					onPress={() => {
						buttonRef.current.fadeOut(100).then(() => {
							navigation.goBack();
						});
					}}
				/>
			</Animatable.View>
			<Text>{pages}</Text>
			<Text>{rating}</Text>
			<Image style={{ width: 50, height: 50 }} source={{ uri: authorImg }} resizeMode="contain" />
			<Text>{author}</Text>
			<Text>{description}</Text>
		</>
	);
};

BookDetails.sharedElements = (route) => {
	const { id } = route.params.item;
	return [
		{
			id: id,
			animation: "move",
			resize: "clip",
		},
	];
};

export default BookDetails;
