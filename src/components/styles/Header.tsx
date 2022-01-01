import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Text from "./Text";
import Box from "./Box";
import getTheme from "../styles/getTheme";
import { IconName } from "./Icon";

interface HeaderProps {
	title: string;
	rightAction?: {
		name: string;
		onPress: () => void;
	};
	leftAction?: IconName;
}

const Header = ({ title, rightAction, leftAction }: HeaderProps) => {
	const theme = getTheme();

	return (
		<Box
			style={{
				marginTop: theme.spacing.s,
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			{leftAction && (
				<Image style={{ width: 50, height: 50, borderColor: "black", borderWidth: 1 }} source={{ uri: leftAction }} />
			)}
			<Text variant="header" margin="m">
				{title}
			</Text>
			{rightAction && (
				<TouchableOpacity
					onPress={rightAction.onPress}
					style={{
						flex: 1,
						marginHorizontal: theme.spacing.m,
						alignItems: "flex-end",
					}}
				>
					<Text>{rightAction.name}</Text>
				</TouchableOpacity>
			)}
		</Box>
	);
};

export default Header;
