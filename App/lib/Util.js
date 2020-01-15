// import moment from 'moment-timezone'
// import AirPorts from '../components/common/AirPort'
// import _ from 'lodash'
// import { NavigationActions, StackActions } from 'react-navigation';
import { Platform, Dimensions, NativeModules, PixelRatio, TextInput, Image } from 'react-native';
// import {APP_ENVIRONMENT, TICKET_TYPE, VXR_BOOKING_STATUS, HOTEL_BOOKING_STATUS} from "../components/common/Const";
// import { DeviceDetection } from './DeviceDetection';
// import NetInfo from '@react-native-community/netinfo'
// import { GENDER, PASSENGER_TYPE, SERVER_RESPONSE_CODE, HOMESTAY_BOOKING_STATUS } from '../components/common/Const'
// import NavigationService from './NavigationService';
// import EMOJI_REGEX from './Emoji'
// import countries from './../homestay/components/pickercountry/data/countries'
// const diaCritics = require('../lib/Diacritics');
// const ZaloPay = NativeModules.ZaloPay;

// on android, default font scaling factor is 1.0, on iphone is 0.88
// more  info: https://github.com/rebeccahughes/react-native-device-info/blob/master/RNDeviceInfo/RNDeviceInfo.m

export default class Util {
	airLogger (...objs) {
		if (__DEV__) {
			console.log(objs);
		}
	};

	static isSmallScreen = () => {
		const { height, width } = Dimensions.get('window');
		const comparedHeight = Util.isAndroid() ? 1920 : 800;
		const comparedWidth = Util.isAndroid() ? 1080 : 480;
		// //console.log('#height, width ', height * PixelRatio.get(), width * PixelRatio.get());
		return height * PixelRatio.get() <= comparedHeight && width * PixelRatio.get() <= comparedWidth
	};

	static isTablet = () => {
		let deviceDetection = new DeviceDetection();
		return deviceDetection.isTablet
	};

	static isIPhone5s = () => {
		const { model } = NativeModules.RNDeviceInfo;
		const majorVersionIOS = parseInt(Platform.Version, 10);
		return majorVersionIOS <= 10
			|| model.toLowerCase().startsWith("iphone 5")
			|| model.toLowerCase().startsWith("iphone se")
	};

	static isIPhone4 = () => {
		const { model } = NativeModules.RNDeviceInfo;
		const majorVersionIOS = parseInt(Platform.Version, 10);
		return majorVersionIOS <= 10
			|| (model.toLowerCase().startsWith("iphone 4"));
	};

	static isiPhoneX = () => {
		let dimension = Dimensions.get('window');
		return (
			Platform.OS === 'ios' &&
			!Platform.isPad &&
			!Platform.isTVOS &&
			((dimension.height === 812 || dimension.width === 812) || (dimension.height === 896 || dimension.width === 896))
		)
	};

	static isAndroid = () => (
		Platform.OS === 'android'
	);
}
