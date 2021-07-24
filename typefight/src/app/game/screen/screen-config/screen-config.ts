import { GameType } from '../../models';

// outletNames in config have to match names defined in router outlets. Dynamic outlets arent setup yet.
export const screensConfig = [
	{
		outletName: 'leftScreen',
		gameType: GameType.Words,
	},
	{
		outletName: 'rightScreen',
		gameType: GameType.Numbers,
	},
];

export interface ScreenConfig {
	outletName: string;
	gameType: GameType;
}
