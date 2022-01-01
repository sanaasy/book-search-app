import React from "react";
import { View, Image } from "react-native";
import { BookProps } from "../BookDetails/BookDetails";
import { Text, Box } from "../styles";
import getTheme from "../styles/getTheme";
import { IconName } from "./Icon";

interface HeaderProps {
	title: string;
	rightAction?: {
		name: string;
		onPress: () => void;
	};
	leftAction?: IconName
}

const Header = ({ title, rightAction, leftAction }: HeaderProps) => {
	const theme = getTheme();

	return (
		<Box style={{backgroundColor: theme.colors.mainBackground}}>
      {leftAction && <Image style={{width: 50, height: 50}} source={{uri: leftAction}} /> }
			<Text variant="header" margin="m">
				{title}
			</Text>
		</Box>
	);
};

export default Header;
