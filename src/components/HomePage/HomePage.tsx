import React from "react";
import { View , Pressable } from "react-native";
import Text from "../styles/Text";
import getTheme from "../styles/getTheme";

import Animated, {
  interpolate, Extrapolate, withTiming, useSharedValue, useAnimatedScrollHandler, useAnimatedStyle,
} from 'react-native-reanimated';

import data from '../../../assets/data'
import BookDetails from "../BookDetails/BookDetails";

const HomePage = () => {
	const theme = getTheme();
	 const scrollY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
	
	return (
		<View>
			<Text marginLeft="m" marginTop="l" variant="header">
				Recently viewed
			</Text>
			<Text marginLeft="m" marginTop="l" variant="header">
				Wishlist
			</Text>
			{/* <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={1}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        // contentContainerStyle={styles.scrollContainer}
        // style={anims.scrollView}
      >
				{data.map((book) => {
					<Pressable 
						key="1"
						onPress={() => {}}
					>
						<BookDetails {...book} />
					</Pressable>
				})}
      </Animated.ScrollView> */}
		</View>
	);
};

export default HomePage;
