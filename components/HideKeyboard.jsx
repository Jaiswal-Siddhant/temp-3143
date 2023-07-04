import { View } from 'native-base';
import React from 'react';
import { Keyboard } from 'react-native';

const HideKeyboard = ({ children }) => {
	return (
		<View flex={1} position={'relative'}>
			<View
				flex={1}
				position={'absolute'}
				top={0}
				w={'full'}
				h={'full'}
				left={0}
				onTouchEnd={() => {
					Keyboard.dismiss();
				}}
			/>
			{children}
		</View>
	);
};

export default HideKeyboard;
