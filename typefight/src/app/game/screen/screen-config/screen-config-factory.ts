import { screensConfig } from './screen-config';

export const getScreenConfigFactory = () => {
	// TODO: probably will need to decrement if screen components ever get destroyed
	let takenUpConfigs = 0;

	return () => {
		return screensConfig[takenUpConfigs++];
	};
};
