import { TestBed } from '@angular/core/testing';

import { ScreenRouterService } from './screen-router.service';

describe('ScreenRouterService', () => {
	let service: ScreenRouterService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ScreenRouterService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
