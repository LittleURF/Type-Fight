import { Subject } from 'rxjs';

export const override = <T>(source: T, modification: Partial<T>): T => {
	const result = { ...source, ...modification };
	return result;
};

export const overrideAndEmit = <T>(source: T, emitter$: Subject<T>, modification: Partial<T>): T => {
	const result = { ...source, ...modification };
	emitter$.next(result);
	return result;
};
