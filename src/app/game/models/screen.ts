import { Word } from './word';

export interface Screen {
	isReady: boolean;
	score: number;
	words: Word[];
}
