import { StyleSheet, Text, View } from "react-native";
import {
	GestureHandlerRootView,
	ScrollView,
} from "react-native-gesture-handler";

const PlanScreen = (): React.JSX.Element => {
	return (
		<GestureHandlerRootView>
			<ScrollView>
				<View>
					<Text>PlanScreen</Text>
				</View>
			</ScrollView>
		</GestureHandlerRootView>
	);
};

export default PlanScreen;

const styles = StyleSheet.create({});
