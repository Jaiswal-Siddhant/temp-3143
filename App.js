import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddNote, Home } from './screens';
import { NativeBaseProvider, Box } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SSRProvider } from '@react-aria/ssr';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SSRProvider>
			<SafeAreaProvider>
				<NativeBaseProvider>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen
								name='Home'
								component={Home}
								options={{
									headerStyle: {
										backgroundColor: 'red',
									},
									headerTitleAlign: 'center',
									title: 'Notes App',
									headerTintColor: 'white',
								}}
							/>
							<Stack.Screen
								name='AddNote'
								component={AddNote}
								options={{
									title: 'Add Note',
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</NativeBaseProvider>
			</SafeAreaProvider>
		</SSRProvider>
	);
}
