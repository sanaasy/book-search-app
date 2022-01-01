import React, { useRef } from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { Text, Box } from "../styles";
import getTheme from "../styles/getTheme";
import { SharedElement } from "react-navigation-shared-element";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
		<ScrollView>
			<Box marginHorizontal="s">
				<Box style={{ justifyContent: "center", alignItems: "center" }}>
					<SharedElement id={`${id}.image`}>
						<Image style={{ width: 400, height: 300 }} source={{ uri: thumbnail }} resizeMode="cover" />
					</SharedElement>
					{/* <SharedElement id={`${id}.title`}> */}
					<Text textAlign="center" fontWeight="bold" fontSize={24} margin="s">
						{title}
					</Text>
					{/* </SharedElement> */}
				</Box>

				<Animatable.View animation="fadeIn" duration={600} delay={300} style={[StyleSheet.absoluteFillObject]}>
					<MaterialCommunityIcons
						name="close"
						size={32}
						color="#fff"
						style={{
							position: "absolute",
							top: 40,
							right: 20,
							zIndex: 2,
						}}
						onPress={() => {
							navigation.goBack();
						}}
					/>
				</Animatable.View>

				<Box
					style={{
						paddingTop: theme.spacing.xs,
						paddingBottom: theme.spacing.xs,
						borderRadius: 10,
						flexDirection: "row",
						marginHorizontal: theme.spacing.xs,
						backgroundColor: theme.colors.details,
					}}
				>
					<Box style={{ flex: 1, paddingVertical: theme.spacing.xs }}>
						<Text textAlign="center" fontSize={13}>
							RATING
						</Text>
						<Text fontWeight="bold" style={{ fontSize: 15, textAlign: "center", marginTop: theme.spacing.xs }}>
							{rating}
						</Text>
					</Box>
					<Box style={{ flex: 1, paddingVertical: theme.spacing.xs, borderLeftWidth: 1, borderColor: "#00000011" }}>
						<Text textAlign="center" fontSize={13}>
							PAGES
						</Text>
						<Text fontWeight="bold" style={{ fontSize: 15, textAlign: "center", marginTop: theme.spacing.xs }}>
							{pages}
						</Text>
					</Box>
				</Box>

				<Box
					style={{
						marginTop: theme.spacing.s,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Image
						source={{ uri: authorImg }}
						style={{ width: 50, height: 50, borderRadius: 50, margin: theme.spacing.s }}
					/>
					<Text variant="title">{author}</Text>
				</Box>
				<SharedElement id={`${id}.description`}>
					<Text variant="body" margin="s">
						{description}
					</Text>
				</SharedElement>
			</Box>
		</ScrollView>
	);
};

BookDetails.sharedElements = (route) => {
	const { id } = route.params.item;
	return [
		{
			id: `${id}.image`,
			animation: "move",
			resize: "clip",
		},
		{
			id: `${id}.title`,
			animation: "move",
			resize: "clip",
		},
		{
			id: `${id}.description`,
			animation: "move",
			resize: "clip",
		},
	];
};

export default BookDetails;
