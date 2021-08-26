import { Screens } from 'src/app/game/models/misc';
import { State } from './play.reducer';
import { Screen } from 'src/app/game/models/Screen';

export const editBothScreens = (state: State, handler: (screen: Screen) => Screen): State => {
	const updatedLeftScreen = handler(state.leftScreen);
	const updatedRightScreen = handler(state.leftScreen);

	return { ...state, leftScreen: updatedLeftScreen, rightScreen: updatedRightScreen };
};

export const editScreenSpecific = (state: State, whichScreen: Screens, handler: (screen: Screen) => Screen): State => {
	const updatedScreen = handler(state[whichScreen]);

	if (whichScreen === Screens.left) {
		return { ...state, leftScreen: updatedScreen };
	} else if (whichScreen === Screens.right) {
		return { ...state, rightScreen: updatedScreen };
	}
};
