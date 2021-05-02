import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScreensComponent } from './game-screens.component';

describe('GameScreensComponent', () => {
	let component: GameScreensComponent;
	let fixture: ComponentFixture<GameScreensComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GameScreensComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GameScreensComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
