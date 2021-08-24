export interface Game {
	isRunning: boolean;
	timerSeconds: number;
}

export interface GameConfig {
	timerBaseAmountSeconds: number;
}
