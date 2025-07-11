import { StyleSheet, Text, View } from "react-native";
import {
	GestureHandlerRootView,
	ScrollView,
} from "react-native-gesture-handler";

const MenuScreen = (): React.JSX.Element => {
	return (
		<GestureHandlerRootView>
			<ScrollView>
				<View>
					<Text>MenuScreen</Text>
				</View>
			</ScrollView>
		</GestureHandlerRootView>
	);
};

export default MenuScreen;

const styles = StyleSheet.create({});
