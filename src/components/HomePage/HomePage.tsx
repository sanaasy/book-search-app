import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import styles from './HomePage.module.css';

const HomePage = () => {
	return (
		<View >
      <Text style={styles.wishlist}>Wishlist</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  wishlist: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default HomePage;
