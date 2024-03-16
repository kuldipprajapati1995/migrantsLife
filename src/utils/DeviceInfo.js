import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const getDetailForAPI = async () => {
	const device_type = Platform.select({ ios: 'I', android: 'A' });
	const os_version = DeviceInfo.getSystemVersion();
	const device_name = await DeviceInfo.getDeviceName().then((name) => name);
	const ip = await DeviceInfo.getIpAddress().then((ip) => ip);
	const deviceOS = await DeviceInfo.getApiLevel().then((apiLevel) => apiLevel);

	return new Promise((resolve, reject) => {
		try {
			resolve({
				device_type,
				os_version,
				device_name,
			 	ip,
				deviceOS
			});
		} catch (error) {
			reject(error);
		}
	});
};

export { getDetailForAPI };
export default getDetailForAPI;
