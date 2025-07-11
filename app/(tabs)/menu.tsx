// festival/app/(tabs)/menu.tsx

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import { Feather } from "@expo/vector-icons";

const MenuScreen = (): React.JSX.Element => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.accordionHeader}
				onPress={() => setIsCollapsed(!isCollapsed)}
			>
				<Text style={styles.headerText}>Comment venir ?</Text>
				<Feather
					name={isCollapsed ? "chevron-down" : "chevron-up"}
					size={20}
					color="#000"
				/>
			</TouchableOpacity>

			<Collapsible collapsed={isCollapsed}>
				<View style={styles.content}>
					<Text style={styles.text}>
						🚗 En voiture : Suivre les panneaux vers le centre-ville
						d'Albi, parking disponible à proximité du site du festival.{"\n\n"}
						🚆 En train : Gare d'Albi Ville à 10 min à pied.{"\n\n"}
						🚌 En bus : Lignes locales desservant l'arrêt Festival.
					</Text>
				</View>
			</Collapsible>
		</View>
	);
};

export default MenuScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "#fff",
	},
	accordionHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderColor: "#ccc",
	},
	headerText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	content: {
		marginTop: 10,
	},
	text: {
		fontSize: 16,
		lineHeight: 24,
	},
});
