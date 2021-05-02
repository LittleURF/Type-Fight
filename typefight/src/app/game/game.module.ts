import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameScreensComponent } from './game-screens.component';
import { GameScreenComponent } from './game-screen/game-screen.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [GameScreensComponent, GameScreenComponent],
	imports: [CommonModule, RouterModule.forChild([])],
})
export class GameModule {}
