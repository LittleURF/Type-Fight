import { GameType } from '../models/misc';
import { Screens } from '../models/Screen';

// whichScreen's in config have to match names defined in router outlets. Dynamic outlets arent setup yet. ;)
export const screensConfig: ScreenConfig[] = [
	{
		whichScreen: Screens.left,
		gameType: GameType.Words,
	},
	{
		whichScreen: Screens.right,
		gameType: GameType.Numbers,
	},
];

export interface ScreenConfig {
	whichScreen: Screens;
	gameType: GameType;
}
