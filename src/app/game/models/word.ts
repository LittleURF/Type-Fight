export class Word {
	content: string = '';
	status: WordStatus = WordStatus.New;
	validity: Validity;

	constructor(content: string) {
		this.content = content;
	}
}

export enum WordStatus {
	New = 'New',
	InProgress = 'InProgress',
	Finished = 'Finished',
}

export enum Validity {
	Valid = 'Valid',
	Invalid = 'Invalid',
}
