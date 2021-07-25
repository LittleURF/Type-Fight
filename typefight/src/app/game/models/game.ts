export class Game {
	isRunning = false;
	private timerBaseAmountSeconds = 60;
	timerSeconds = this.timerBaseAmountSeconds;

	start(): void {
		this.isRunning = true;
		this.timerSeconds = this.timerBaseAmountSeconds;
		this.runTimer();
	}

	private runTimer() {
		const decrementInterval = setInterval(() => {
			if (this.timerSeconds === 0) {
				this.isRunning = false;
				clearInterval(decrementInterval);
			} else {
				this.timerSeconds--;
			}
		}, 1000);
	}
}
