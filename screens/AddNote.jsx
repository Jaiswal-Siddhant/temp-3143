import React from 'react';
import { Box, Input, Spinner, Text, TextArea } from 'native-base';
import { HideKeyboard } from '../components';
import { storeData, clearData } from '../helpers';
import { ToastAndroid } from 'react-native';

const AddNote = ({ navigation }) => {
	const [isLoading, setIsLoading] = React.useState(false);
	const [title, setTitle] = React.useState('');
	const [body, setBody] = React.useState('');

	return (
		<HideKeyboard>
			<Box
				pt={5}
				onResponderRelease={() => {
					console.log('object');
				}}>
				<Input
					mx='3'
					variant={'filled'}
					backgroundColor={'#fff'}
					shadow={3}
					placeholder='Title'
					w='90%'
					fontSize={15}
					rounded={'lg'}
					onChangeText={setTitle}
				/>
				<TextArea
					h={'32'}
					mx='3'
					rounded={'lg'}
					mt={3}
					variant={'filled'}
					backgroundColor={'#fff'}
					shadow={3}
					placeholder='Body'
					w='90%'
					fontSize={15}
					onChangeText={setBody}
				/>

				<Box
					mx='3'
					mt={3}
					w='90%'
					bgColor={'red.500'}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					h={12}
					onTouchEnd={() => {
						storeData({ title, body });
						// clearData();
						setIsLoading(true);
						setTimeout(() => {
							setIsLoading(false);
							navigation.pop();
							ToastAndroid.show('Added!', ToastAndroid.SHORT);
						}, 2300);
					}}
					rounded={'lg'}>
					{isLoading ? (
						<Spinner color='white' fontSize={'lg'} />
					) : (
						<Text
							fontSize={'md'}
							color={'white'}
							fontWeight={'semibold'}>
							Add
						</Text>
					)}
				</Box>
			</Box>
		</HideKeyboard>
	);
};

export default AddNote;
