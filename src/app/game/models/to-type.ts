export class ToType<contentType> {
	status: ToTypeStatus = ToTypeStatus.New;
	validity: Validity;

	content: contentType;

	constructor(content: contentType) {
		this.content = content;
	}
}

export class Number extends ToType<number> {}

export class Word extends ToType<string> {}

export enum ToTypeStatus {
	New = 'New',
	InProgress = 'InProgress',
	Finished = 'Finished',
}

export enum Validity {
	Valid = 'Valid',
	Invalid = 'Invalid',
}
