import React, { useEffect } from 'react';
import { Text, Box } from 'native-base';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card } from '../components';
import { getData } from '../helpers';
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {
	const insets = useSafeAreaInsets();
	const [notes, setNotes] = React.useState([]);
	const homeNavigation = useNavigation();
	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			(async () => {
				var data = await getData();
				setNotes(data);
				console.log('data', data);
			})();
		});
		return () => {
			unsubscribe();
		};
	}, [navigation.navigate]);
	return (
		<Box
			backgroundColor={'#eeeeee'}
			position={'relative'}
			pt={insets.top}
			pb={insets.bottom}
			pl={insets.left}
			pr={insets.right}
			style={[styles.container]}>
			<StatusBar barStyle='light-content' backgroundColor='#747474' />
			{notes.length ? (
				<ScrollView
					style={{
						gap: 10,
						display: 'flex',
						flexDirection: 'column',
					}}>
					{notes.map((item, index) => {
						return (
							<Box>
								<Card title={item.title} body={item.body} />
							</Box>
						);
					})}
				</ScrollView>
			) : (
				<Text fontSize={16} mb={10}>
					Add notes to get started
				</Text>
			)}
			<Box
				onTouchEnd={() => {
					navigation.navigate('AddNote');
				}}
				position={'absolute'}
				right={5}
				bottom={10}
				w={'16'}
				h={'16'}
				textAlign={'center'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
				backgroundColor={'red.500'}
				style={{ borderRadius: 90 }}>
				<Text color={'#fff'} fontWeight={'semibold'} fontSize={16}>
					ADD
				</Text>
			</Box>
		</Box>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Home;
