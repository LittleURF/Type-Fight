import { ToType } from './to-type';

export interface Screen {
	isReady: boolean;
	score: number;
	toType: ToType<any>[];
}
