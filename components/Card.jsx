import React from 'react';
import { VStack, Box, Text } from 'native-base';

const Divider = () => {
	return (
		<Box display={'flex'} alignItems={'center'} py={2}>
			<Box w={'90%'} h={'0.5'} backgroundColor={'#fe0000'} />
		</Box>
	);
};

export default function ({ title, body }) {
	return (
		<Box
			border='1'
			borderRadius='xl'
			backgroundColor={'#fff'}
			mx={'5'}
			shadow={'3'}
			minWidth={'80%'}
			my={'3'}>
			<VStack space='4' divider={<Divider />}>
				<Box px='4' mt='3' fontWeight={'extrabold'}>
					<Text py={1} fontSize={16} fontWeight={'semibold'}>
						{title}
					</Text>
				</Box>
				<Box px='4' pb='4' minHeight={'12'}>
					{body}
				</Box>
			</VStack>
		</Box>
	);
}
