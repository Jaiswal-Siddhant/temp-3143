import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';

exports.storeData = async ({ title, body }) => {
	if (!title || !body) {
		ToastAndroid.show('Please Enter Title and Body', ToastAndroid.SHORT);
		return;
	}

	let value = { title, body };
	let updatedTransactions;
	try {
		let existingTransactions = await AsyncStorage.getItem('Notes');
		existingTransactions = await JSON.parse(existingTransactions);
		if (existingTransactions) {
			updatedTransactions = [...existingTransactions, value];
		} else {
			updatedTransactions = [value];
		}
		console.log(updatedTransactions);
		updatedTransactions = JSON.stringify(updatedTransactions);
		await AsyncStorage.setItem('Notes', updatedTransactions);
		ToastAndroid.show('Added!', ToastAndroid.SHORT);
		console.log('Data Write successful');
	} catch (e) {
		// saving error
		ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
		console.log(e);
	}
};

exports.getDataDB = async () => {
	try {
		const data = await AsyncStorage.getItem('Notes');
		return await JSON.parse(data);
	} catch (error) {
		ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
		console.log(error);
	}
};

exports.getData = async () => {
	try {
		const value = await AsyncStorage.getItem('Notes');
		if (value !== null) {
			// value previously stored
			let data = await JSON.parse(value);
			return data;
		} else {
			return [];
		}
	} catch (e) {
		// error reading value
		ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
	}
};

exports.clearData = async () => {
	try {
		await AsyncStorage.clear();
		console.log('Data wiped successfully');
	} catch (error) {
		ToastAndroid.show('Something went wrong!', ToastAndroid.SHORT);
	}
};
